import jwt from "jsonwebtoken";
import {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN,
} from "../common/constant/app.constant";

export const tokenService = {
  createTokens: (userId) => {
    console.log(ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN);
    const accessToken = jwt.sign(
      { userId: userId },
      ACCESS_TOKEN_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
    );
    const refreshToken = jwt.sign(
      { userId: userId },
      REFRESH_TOKEN_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRES_IN }
    );
    return {
      accessToken,
      refreshToken,
    };
  },

  verifyAccessToken: (accessToken, option) => {
    const decodeAccessToken = jwt.verify(
      accessToken,
      ACCESS_TOKEN_SECRET,
      option
    );
    return decodeAccessToken;
  },

  //refresh con HSD
  verifyRefreshToken: (refreshToken) => {
    const decodeRefreshToken = jwt.verify(
      refreshToken,
      REFRESH_TOKEN_SECRET,
      REFRESH_TOKEN_EXPIRES_IN
    );
    return decodeRefreshToken;
  },
};
