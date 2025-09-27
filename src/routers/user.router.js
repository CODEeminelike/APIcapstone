import express from "express";
import { protect } from "../middlewares/protect.middleware";
import { userController } from "../controllers/user.controller";

export const userRouter = express.Router();

userRouter.get("/get-profile", userController.getProfile);
userRouter.put("/update-profile", userController.updateProfile);
userRouter.get("/created-images", userController.getCreatedImages);
userRouter.get("/saved-images", userController.getSavedImages);

// fullName: 'NTT',
//   age: null,
//   avatar: null,
