import {
  BadRequestException,
  ConflictException,
} from "../common/app-error/exception.helper";
import prisma from "../common/prisma/init.prisma";
import { tokenService } from "./token.service";
import bcrypt from "bcrypt";

export const authService = {
  create: async function (req) {
    return `This action create`;
  },

  findAll: async function (req) {
    return `This action returns all auth`;
  },

  findOne: async function (req) {
    return `This action returns a id: ${req.params.id} auth`;
  },

  update: async function (req) {
    return `This action updates a id: ${req.params.id} auth`;
  },

  remove: async function (req) {
    return `This action removes a id: ${req.params.id} auth`;
  },

  register: async function (req) {
    const { email, password, fullName } = req.body;

    const userExits = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (userExits) {
      throw new ConflictException("Account Registered");
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    const userNew = await prisma.users.create({
      data: {
        email: email,
        password: passwordHash,
        fullName: fullName,
      },
    });

    console.log({ email, password, fullName, userExits, userNew });
    return true;
  },

  login: async function (req) {
    const { email, password } = req.body;
    const userExits = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!userExits) {
      throw new BadRequestException("User not found");
    }

    const isPassword = bcrypt.compareSync(
      password,
      userExits.password
    );

    if (!isPassword) {
      throw new BadRequestException("Incorrect password");
    }

    const tokens = tokenService.createTokens(userExits.id);
    return tokens;
  },

  freshToken: async (req) => {
    const { accessToken, refreshToken } = req.body;

    const decodeAccessToken = tokenService.verifyAccessToken(
      accessToken,
      { ignoreExpiration: true }
    );

    const decodeRefreshToken =
      tokenService.verifyRefreshToken(refreshToken);

    if (decodeAccessToken.userId !== decodeRefreshToken.userId) {
      throw new BadRequestException("Token invalid");
    }

    const user = await prisma.users.findUnique({
      where: {
        id: decodeAccessToken.userId,
      },
    });

    if (!user) {
      throw new BadRequestException("User Invalid");
    }

    const newTokens = tokenService.createTokens(user.id);
    console.log(decodeAccessToken, decodeRefreshToken);
    return newTokens;
  },

  getInfo: async (req) => {
    const user = req.user;
    //delete user[password];
    return user;
  },

  googleAuth20: async (req) => {
    return req.user;
    //return const urlRedirect = `http://localhost:3000/login-callback?accessToken=${accessToken}&refreshToken=${refreshToken}`;
  },
};
