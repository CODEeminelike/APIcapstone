import { responseError } from "../helpers/response.helper.js";
import jwt from "jsonwebtoken";
export const appError = (err, req, res, next) => {
  // 401 => logout
  // 403 => api refresh-token
  if (err instanceof jwt.TokenExpiredError) {
    return res.status(403).json(responseError("Token expired", 403));
  }

  if (err instanceof jwt.JsonWebTokenError) {
    return res.status(401).json(responseError("Invalid token", 401));
  }
  const resData = responseError(err?.message, err?.code, err?.stack);
  res.status(resData.statusCode).json(resData);
};
