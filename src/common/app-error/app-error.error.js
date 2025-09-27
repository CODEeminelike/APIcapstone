import { responseError } from "../helpers/response.helper.js";

export const appError = (err, req, res, next) => {
  const resData = responseError(err?.message, err?.code, err?.stack);
  res.status(resData.statusCode).json(resData);
};
