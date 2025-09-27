import express from "express";
import { authRouter } from "./auth.router";
import { protect } from "../middlewares/protect.middleware";
import { userRouter } from "./user.router";
import { imageRouter } from "./image.router";
import { publicRouter } from "./public.router";

export const rootRouter = express.Router();
rootRouter.use("/auth", authRouter);
rootRouter.use("/user", protect, userRouter);
rootRouter.use("/image", protect, imageRouter);
rootRouter.use("/public", publicRouter);
