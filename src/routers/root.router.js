import express from "express";
import { authRouter } from "./auth.router";

export const rootRouter = express.Router();
rootRouter.use("/auth", authRouter);
