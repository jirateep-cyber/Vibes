import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../services/prisma.js";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(5)
});

export async function createContact(req: Request, res: Response) {
  const input = contactSchema.parse(req.body);
  const message = await prisma.contactMessage.create({ data: input });
  res.status(201).json({ message });
}

export async function listContacts(_req: Request, res: Response) {
  const messages = await prisma.contactMessage.findMany({ orderBy: { createdAt: "desc" } });
  res.json({ messages });
}
