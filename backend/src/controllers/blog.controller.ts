import type { Request, Response } from "express";
import { z } from "zod";
import { prisma } from "../services/prisma.js";

const postSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().min(2),
  content: z.string().min(2),
  published: z.boolean().optional()
});

export async function listPosts(_req: Request, res: Response) {
  const posts = await prisma.blogPost.findMany({ where: { published: true }, orderBy: { createdAt: "desc" } });
  res.json({ posts });
}

export async function getPost(req: Request, res: Response) {
  const post = await prisma.blogPost.findUnique({ where: { slug: String(req.params.slug) } });
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json({ post });
}

export async function createPost(req: Request, res: Response) {
  const input = postSchema.parse(req.body);
  const post = await prisma.blogPost.create({ data: { ...input, authorId: req.user!.userId } });
  res.status(201).json({ post });
}
