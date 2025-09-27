import express from "express";
import cors from "cors";
import prisma from "./src/common/prisma/init.prisma";
import { rootRouter } from "./src/routers/root.router";
import { initGoogleAuth20 } from "./src/common/passport/google-auth20.passport";
import { appError } from "./src/common/app-error/app-error.error.js";

const app = express();
initGoogleAuth20();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3333", "google.com"],
  })
);

app.use("/api", rootRouter);

app.use(appError);

const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
