import { Router } from "express";
import { applyToCampaign, createCampaign, listCampaigns } from "../controllers/campaign.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";

export const campaignRouter = Router();

campaignRouter.get("/", listCampaigns);
campaignRouter.post("/", requireAuth, requireAdmin, createCampaign);
campaignRouter.post("/:id/apply", requireAuth, applyToCampaign);
