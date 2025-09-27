// src/controllers/public.controller.js

import { responseSuccess } from "../common/helpers/response.helper.js";
import { publicService } from "../services/public.Service.js";

export const publicController = {
  getImages: async (req, res, next) => {
    try {
      const result = await publicService.getImages(req);
      const response = responseSuccess(
        result,
        "Get images successfully"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
  searchImages: async (req, res, next) => {
    try {
      const result = await publicService.searchImages(req);
      const response = responseSuccess(
        result,
        "Search images successfully"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
  getImageDetail: async (req, res, next) => {
    try {
      const result = await publicService.getImageDetail(req);
      const response = responseSuccess(
        result,
        "Get image detail successfully"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  getImageComments: async (req, res, next) => {
    try {
      const result = await publicService.getImageComments(req);
      const response = responseSuccess(
        result,
        "Get image comments successfully"
      );
      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
