import type { NextFunction, Request, Response } from "express";

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  const message = error instanceof Error ? error.message : "Internal server error";
  const status = message.includes("Invalid") ? 401 : 500;
  res.status(status).json({ message });
}
