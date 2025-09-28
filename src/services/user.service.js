import express from "express";
import passport from "passport";
import { BadRequestException } from "../common/app-error/exception.helper";
import prisma from "../common/prisma/init.prisma";
import {
  validateAge,
  validateAvatar,
  validateFullName,
} from "../validation/validate";

export const userService = {
  getProfile: async (req) => {
    const { password, googleId, updatedAt, ...safeUser } = req.user;
    console.log(req.user);
    return safeUser;
  },
  updateProfile: async (req) => {
    const { fullName, age, avatar } = req.body;
    const userId = req.user.id;

    // Kiểm tra user tồn tại
    const userExist = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!userExist) {
      throw new BadRequestException("User invalid");
    }

    // Validate data - các hàm validate sẽ tự throw BadRequestException nếu lỗi
    const validatedData = {
      fullName: validateFullName(fullName),
      age: validateAge(age),
      avatar: validateAvatar(avatar),
    };

    // Update user
    const updatedUser = await prisma.users.update({
      where: { id: userId },
      data: {
        fullName: validatedData.fullName,
        age: validatedData.age,
        avatar: validatedData.avatar,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        age: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return updatedUser;
  },
  getCreatedImages: async (req) => {
    const userId = req.user.id;

    // Lấy danh sách ảnh đã tạo bởi user
    const createdImages = await prisma.images.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        imageName: true,
        imagePath: true,
        description: true,
        createdAt: true,
        users: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
            saved_images: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return createdImages;
  },

  getSavedImages: async (req) => {
    const userId = req.user.id;

    // Lấy danh sách ảnh đã lưu bởi user
    const savedImages = await prisma.saved_images.findMany({
      where: {
        userId: userId,
      },
      select: {
        createdAt: true,
        images: {
          select: {
            id: true,
            imageName: true,
            imagePath: true,
            description: true,
            createdAt: true,
            users: {
              select: {
                id: true,
                fullName: true,
                avatar: true,
              },
            },
            _count: {
              select: {
                comments: true,
                saved_images: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Format lại kết quả để dễ sử dụng
    const formattedSavedImages = savedImages.map((item) => ({
      savedAt: item.createdAt,
      ...item.images,
    }));

    return formattedSavedImages;
  },
};
