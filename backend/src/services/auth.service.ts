import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "@prisma/client";
import { prisma } from "./prisma.js";

const jwtSecret = process.env.JWT_SECRET ?? "development-secret";

export async function registerUser(input: { name: string; email: string; password: string }) {
  const passwordHash = await bcrypt.hash(input.password, 10);
  const user = await prisma.user.create({
    data: {
      name: input.name,
      email: input.email.toLowerCase(),
      passwordHash,
      role: Role.USER,
      profile: { create: {} }
    },
    select: { id: true, name: true, email: true, role: true }
  });
  return { user, token: signToken(user.id, user.role) };
}

export async function loginUser(input: { email: string; password: string }) {
  const user = await prisma.user.findUnique({ where: { email: input.email.toLowerCase() } });
  if (!user) throw new Error("Invalid email or password");
  const valid = await bcrypt.compare(input.password, user.passwordHash);
  if (!valid) throw new Error("Invalid email or password");
  return {
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token: signToken(user.id, user.role)
  };
}

export function signToken(userId: string, role: Role) {
  return jwt.sign({ userId, role }, jwtSecret, { expiresIn: "7d" });
}
