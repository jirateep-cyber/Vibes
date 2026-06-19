import { Router } from "express";
import { createContact, listContacts } from "../controllers/contact.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";

export const contactRouter = Router();

contactRouter.post("/", createContact);
contactRouter.get("/", requireAuth, requireAdmin, listContacts);
