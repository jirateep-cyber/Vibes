import { Router } from "express";
import { adminSummary } from "../controllers/admin.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";

export const adminRouter = Router();

adminRouter.get("/summary", requireAuth, requireAdmin, adminSummary);
