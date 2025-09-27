import express from "express";
import { publicController } from "../controllers/public.controller";

export const publicRouter = express.Router();
publicRouter.get("/images", publicController.getImages);

publicRouter.get("/images/search", publicController.searchImages);

publicRouter.get("/images/:imageId", publicController.getImageDetail);
publicRouter.get(
  "/images/:imageId/comments",
  publicController.getImageComments
);
