import { responseSuccess } from "../common/helpers/response.helper";
import { authService } from "../services/auth.service";

export const authController = {
  create: async function (req, res, next) {
    const result = await authService.create(req);
    const response = responseSuccess(
      result,
      `Create auth successfully`
    );
    res.status(response.statusCode).json(response);
  },

  findAll: async function (req, res, next) {
    const result = await authService.findAll(req);
    const response = responseSuccess(
      result,
      `Get all auths successfully`
    );
    res.status(response.statusCode).json(response);
  },

  findOne: async function (req, res, next) {
    const result = await authService.findOne(req);
    const response = responseSuccess(
      result,
      `Get auth #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  update: async function (req, res, next) {
    const result = await authService.update(req);
    const response = responseSuccess(
      result,
      `Update auth #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  remove: async function (req, res, next) {
    const result = await authService.remove(req);
    const response = responseSuccess(
      result,
      `Remove auth #${req.params.id} successfully`
    );
    res.status(response.statusCode).json(response);
  },

  register: async function (req, res, next) {
    const result = await authService.register(req);
    const response = responseSuccess(result, `Register successfully`);
    res.status(response.statusCode).json(response);
  },

  login: async function (req, res, next) {
    const result = await authService.login(req);
    const response = responseSuccess(result, `Login successfully`);
    res.status(response.statusCode).json(response);
  },
  refreshToken: async function (req, res, next) {
    const result = await authService.freshToken(req);
    const response = responseSuccess(
      result,
      "Refesh token successfully"
    );
    res.status(response.statusCode).json(response);
  },
  getInfo: async (req, res, next) => {
    const result = await authService.getInfo(req);
    const response = responseSuccess(result, "getInfo_ successfully");
    res.status(response.statusCode).json(response);
  },

  googleAuth20: async (req, res, next) => {
    const result = await authService.googleAuth20(req);
    const response = responseSuccess(result, "GGLOGIN successfully");
    res.status(response.statusCode).json(response);
    // res.redirect(result);
  },
};
