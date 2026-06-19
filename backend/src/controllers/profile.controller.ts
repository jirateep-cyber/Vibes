import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../services/prisma.js";

const profileSchema = z.object({
  bio: z.string().optional(),
  avatarUrl: z.string().url().optional(),
  creatorVibe: z.string().optional(),
  platform: z.string().optional(),
  categories: z.array(z.string()).optional(),
  website: z.string().url().optional(),
  location: z.string().optional()
});

export async function getProfile(req: Request, res: Response) {
  const profile = await prisma.profile.findUnique({ where: { userId: req.user!.userId } });
  res.json({ profile });
}

export async function updateProfile(req: Request, res: Response) {
  const input = profileSchema.parse(req.body);
  const profile = await prisma.profile.upsert({
    where: { userId: req.user!.userId },
    update: input,
    create: { ...input, userId: req.user!.userId }
  });
  res.json({ profile });
}
