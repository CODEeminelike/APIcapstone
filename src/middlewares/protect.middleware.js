import { UnauthorizedException } from "../common/app-error/exception.helper";
import prisma from "../common/prisma/init.prisma";
import { tokenService } from "../services/token.service";

export const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    throw new UnauthorizedException("Not authorization");

  const [type, accessToken] = authorization?.split(" ");
  if (type !== "Bearer")
    throw new UnauthorizedException("Type Token Invalid");

  if (!accessToken)
    throw new UnauthorizedException("Not Access Token");

  const { userId } = tokenService.verifyAccessToken(accessToken);

  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) throw new UnauthorizedException("Not User");

  req.user = user;

  next();
};
