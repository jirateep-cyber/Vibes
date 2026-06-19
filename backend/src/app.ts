import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { adminRouter } from "./routes/admin.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { blogRouter } from "./routes/blog.routes.js";
import { campaignRouter } from "./routes/campaign.routes.js";
import { contactRouter } from "./routes/contact.routes.js";
import { profileRouter } from "./routes/profile.routes.js";
import { errorHandler } from "./middleware/error.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") ?? ["http://localhost:3000"], credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true, service: "buddy-review-api" }));
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/campaigns", campaignRouter);
app.use("/api/blog", blogRouter);
app.use("/api/contact", contactRouter);
app.use("/api/admin", adminRouter);
app.use(errorHandler);
