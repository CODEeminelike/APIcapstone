import { PrismaClient } from "../../../generated/prisma"; // .../.../generated/prisma

const prisma = new PrismaClient();

const initPrisma = async () => {
  try {
    await prisma.$executeRaw`SELECT 1+1 AS result`;
    console.log("Prisma is connected successfully");
  } catch (error) {
    console.error("Prisma error:", error.message);
  }
};

initPrisma();

export default prisma;
