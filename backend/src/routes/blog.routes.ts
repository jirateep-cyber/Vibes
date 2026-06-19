import { Router } from "express";
import { createPost, getPost, listPosts } from "../controllers/blog.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";

export const blogRouter = Router();

blogRouter.get("/", listPosts);
blogRouter.get("/:slug", getPost);
blogRouter.post("/", requireAuth, requireAdmin, createPost);
