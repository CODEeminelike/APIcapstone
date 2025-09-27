import express from "express";
import { imageService } from "../services/image.service";
import { responseSuccess } from "../common/helpers/response.helper";

export const imageController = {
  addNewImage: async (req, res, next) => {
    const result = await imageService.addNewImage(req);
    const response = responseSuccess(
      result,
      "Add new image successfully"
    );
    res.status(response.statusCode).json(response);
  },

  deleteCreatedImage: async (req, res, next) => {
    const result = await imageService.deleteCreatedImage(req);
    const response = responseSuccess(
      result,
      "Delete image successfully"
    );
    res.status(response.statusCode).json(response);
  },

  addComment: async (req, res, next) => {
    const result = await imageService.addComment(req);
    const response = responseSuccess(
      result,
      "Add comment successfully"
    );
    res.status(response.statusCode).json(response);
  },
  saveImage: async (req, res, next) => {
    const result = await imageService.saveImage(req);
    const response = responseSuccess(
      result,
      "Save image successfully"
    );
    res.status(response.statusCode).json(response);
  },
  unsaveImage: async (req, res, next) => {
    const result = await imageService.unsaveImage(req);
    const response = responseSuccess(
      result,
      "Unsave image successfully"
    );
    res.status(response.statusCode).json(response);
  },
};
