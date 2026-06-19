import type { Request, Response } from "express";
import { prisma } from "../services/prisma.js";

export async function adminSummary(_req: Request, res: Response) {
  const [users, campaigns, posts, contacts] = await Promise.all([
    prisma.user.count(),
    prisma.campaign.count(),
    prisma.blogPost.count(),
    prisma.contactMessage.count()
  ]);
  res.json({ users, campaigns, posts, contacts });
}
