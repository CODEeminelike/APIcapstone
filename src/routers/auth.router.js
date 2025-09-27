import express from "express";
import { authController } from "../controllers/auth.controller";
import { protect } from "../middlewares/protect.middleware";
import passport from "passport";
export const authRouter = express.Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/refresh-token", authController.refreshToken);
authRouter.post("/get-info", protect, authController.getInfo);

//GOOGLE
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  authController.googleAuth20
);
