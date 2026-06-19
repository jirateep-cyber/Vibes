import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../services/prisma.js";

const campaignSchema = z.object({
  title: z.string().min(2),
  brief: z.string().min(5),
  platform: z.string(),
  category: z.string(),
  budget: z.string().optional()
});

export async function listCampaigns(_req: Request, res: Response) {
  const campaigns = await prisma.campaign.findMany({ orderBy: { createdAt: "desc" } });
  res.json({ campaigns });
}

export async function createCampaign(req: Request, res: Response) {
  const input = campaignSchema.parse(req.body);
  const campaign = await prisma.campaign.create({ data: input });
  res.status(201).json({ campaign });
}

export async function applyToCampaign(req: Request, res: Response) {
  const application = await prisma.application.create({
    data: { userId: req.user!.userId, campaignId: String(req.params.id) }
  });
  res.status(201).json({ application });
}
