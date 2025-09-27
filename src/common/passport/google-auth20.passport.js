//var GoogleStrategy = require("passport-google-oauth20").Strategy;
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_URI_CALLBACK,
} from "../constant/app.constant";
import passport from "passport";
import { tokenService } from "../../services/token.service";
import prisma from "../prisma/init.prisma";

export const initGoogleAuth20 = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CLIENT_URI_CALLBACK,
      },
      async function (accessToken, refreshToken, profile, cb) {
        //console.log("check", profile);

        const googleId = profile.id;
        const displayName = profile.displayName;
        const email = profile.emails[0].value;
        const emailVerified = profile.emails[0].verified;
        const photo = profile.photos[0].value;

        if (!emailVerified) {
          return cb(new Error("Email not verified"), null);
        }
        let userExist = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });

        if (!userExist) {
          userExist = await prisma.users.create({
            data: {
              email: email,
              avatar: photo,
              fullName: displayName,
              googleId: googleId,
            },
          });
        }
        const tokens = tokenService.createTokens(userExist.id);
        return cb(null, tokens);
      }
    )
  );
};
