import express from "express";
import { protect } from "../middlewares/protect.middleware";
import { userController } from "../controllers/user.controller";
import { imageController } from "../controllers/image.controller";

export const imageRouter = express.Router();
imageRouter.post("/", imageController.addNewImage);
imageRouter.delete(
  "/:id",

  imageController.deleteCreatedImage
);
imageRouter.post(
  "/:imageId/comments",

  imageController.addComment
);
imageRouter.post(
  "/:imageId/save",

  imageController.saveImage
);
imageRouter.delete(
  "/:imageId/save",

  imageController.unsaveImage
);
