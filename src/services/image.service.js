import express from "express";
import prisma from "../common/prisma/init.prisma";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from "../common/app-error/exception.helper";

export const imageService = {
  addNewImage: async (req) => {
    const userId = req.user.id;
    const { imageName, imagePath, description } = req.body;

    // Kiểm tra user tồn tại
    const userExist = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!userExist) {
      throw new BadRequestException("User invalid");
    }

    // Tạo image mới
    const newImage = await prisma.images.create({
      data: {
        imageName: imageName.trim(),
        imagePath: imagePath.trim(),
        description: description ? description.trim() : null,
        userId: userId,
      },
      select: {
        id: true,
        imageName: true,
        imagePath: true,
        description: true,
        userId: true,
        createdAt: true,
      },
    });

    return newImage;
  },

  deleteCreatedImage: async (req) => {
    const userId = req.user.id;
    const imageId = parseInt(req.params.id); // Lấy imageId từ URL params

    // Validate imageId
    if (!imageId || isNaN(imageId)) {
      throw new BadRequestException("Invalid image ID");
    }

    // Kiểm tra image tồn tại và thuộc về user
    const imageExist = await prisma.images.findFirst({
      where: {
        id: imageId,
        userId: userId, // Chỉ cho phép xóa ảnh của chính user
      },
    });

    if (!imageExist) {
      throw new NotFoundException(
        "Image not found or you don't have permission to delete this image"
      );
    }

    // Xóa image
    const deletedImage = await prisma.images.delete({
      where: {
        id: imageId,
      },
      select: {
        id: true,
        imageName: true,
        imagePath: true,
        description: true,
        userId: true,
      },
    });

    return {
      message: "Image deleted successfully",
      deletedImage: deletedImage,
    };
  },
  addComment: async (req) => {
    const userId = req.user.id;
    const imageId = parseInt(req.params.imageId);
    const { content } = req.body;

    // Validate imageId
    if (!imageId || isNaN(imageId)) {
      throw new BadRequestException("Invalid image ID");
    }

    // Validate content (bắt buộc)
    if (!content || content.trim() === "") {
      throw new BadRequestException("Comment content is required");
    }

    // Kiểm tra image tồn tại
    const imageExist = await prisma.images.findUnique({
      where: { id: imageId },
    });

    if (!imageExist) {
      throw new NotFoundException("Image not found");
    }

    // Kiểm tra user tồn tại
    const userExist = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!userExist) {
      throw new BadRequestException("User invalid");
    }

    // Tạo comment mới
    const newComment = await prisma.comments.create({
      data: {
        content: content.trim(),
        userId: userId,
        imageId: imageId,
      },
      select: {
        id: true,
        content: true,
        userId: true,
        imageId: true,
        createdAt: true,
        users: {
          select: {
            id: true,
            fullName: true,
            avatar: true,
          },
        },
      },
    });

    return newComment;
  },
  saveImage: async (req) => {
    const userId = req.user.id;
    const imageId = parseInt(req.params.imageId);

    // Validate imageId
    if (!imageId || isNaN(imageId)) {
      throw new BadRequestException("Invalid image ID");
    }

    // Kiểm tra image tồn tại
    const imageExist = await prisma.images.findUnique({
      where: { id: imageId },
    });

    if (!imageExist) {
      throw new NotFoundException("Image not found");
    }

    // Kiểm tra user tồn tại
    const userExist = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!userExist) {
      throw new BadRequestException("User invalid");
    }

    // Kiểm tra đã lưu ảnh này chưa (tránh duplicate)
    const alreadySaved = await prisma.saved_images.findUnique({
      where: {
        userId_imageId: {
          userId: userId,
          imageId: imageId,
        },
      },
    });

    if (alreadySaved) {
      throw new ConflictException("Image already saved");
    }

    // Lưu ảnh
    const savedImage = await prisma.saved_images.create({
      data: {
        userId: userId,
        imageId: imageId,
      },
      select: {
        userId: true,
        imageId: true,
        createdAt: true,
        images: {
          select: {
            id: true,
            imageName: true,
            imagePath: true,
            description: true,
            users: {
              select: {
                id: true,
                fullName: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    return {
      message: "Image saved successfully",
      savedImage: savedImage,
    };
  },
  unsaveImage: async (req) => {
    const userId = req.user.id;
    const imageId = parseInt(req.params.imageId);

    // Validate imageId
    if (!imageId || isNaN(imageId)) {
      throw new BadRequestException("Invalid image ID");
    }

    // Kiểm tra image tồn tại
    const imageExist = await prisma.images.findUnique({
      where: { id: imageId },
    });

    if (!imageExist) {
      throw new NotFoundException("Image not found");
    }

    // Kiểm tra user tồn tại
    const userExist = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!userExist) {
      throw new BadRequestException("User invalid");
    }

    // Kiểm tra đã lưu ảnh này chưa
    const savedImage = await prisma.saved_images.findUnique({
      where: {
        userId_imageId: {
          userId: userId,
          imageId: imageId,
        },
      },
      select: {
        userId: true,
        imageId: true,
        images: {
          select: {
            imageName: true,
            imagePath: true,
          },
        },
      },
    });

    if (!savedImage) {
      throw new NotFoundException("Image not saved yet");
    }

    // Bỏ lưu ảnh
    await prisma.saved_images.delete({
      where: {
        userId_imageId: {
          userId: userId,
          imageId: imageId,
        },
      },
    });

    return {
      message: "Image unsaved successfully",
      unsavedImage: {
        imageId: imageId,
        imageName: savedImage.images.imageName,
        imagePath: savedImage.images.imagePath,
      },
    };
  },
};
