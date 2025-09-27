import express, { response } from "express";
import { responseSuccess } from "../common/helpers/response.helper";
import { userService } from "../services/user.service";

export const userController = {
  getProfile: async (req, res, next) => {
    const result = await userService.getProfile(req);
    const response = responseSuccess(
      result,
      "Get Profile Successfully"
    );
    //console.log(response);
    res.status(response.statusCode).json(response);
  },
  updateProfile: async (req, res, next) => {
    const result = await userService.updateProfile(req);
    const response = responseSuccess(
      result,
      "Update Profile Successfully"
    );
    //console.log(response);
    res.status(response.statusCode).json(response);
  },
  getCreatedImages: async (req, res, next) => {
    const result = await userService.getCreatedImages(req);
    const response = responseSuccess(
      result,
      "getCreatedImages Successfully___"
    );
    //console.log(response);
    res.status(response.statusCode).json(response);
  },
  getSavedImages: async (req, res, next) => {
    const result = await userService.getSavedImages(req);
    const response = responseSuccess(
      result,
      "getSavedImages Successfully___z"
    );
    //console.log(response);
    res.status(response.statusCode).json(response);
  },
};
