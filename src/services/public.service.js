// src/services/public.service.js
import {
  BadRequestException,
  NotFoundException,
} from "../common/app-error/exception.helper.js";
import prisma from "../common/prisma/init.prisma.js";

export const publicService = {
  getImages: async (req) => {
    const { page = 1, limit = 20 } = req.query;

    // Validate parameters
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    if (isNaN(pageNum) || pageNum < 1) {
      throw new BadRequestException("Page must be a positive number");
    }

    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      throw new BadRequestException(
        "Limit must be between 1 and 100"
      );
    }

    const skip = (pageNum - 1) * limitNum;

    // Lấy danh sách ảnh với phân trang
    const [images, total] = await Promise.all([
      prisma.images.findMany({
        skip: skip,
        take: limitNum,
        orderBy: { createdAt: "desc" },
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
      }),
      prisma.images.count(),
    ]);

    return {
      images,
      pagination: {
        currentPage: pageNum,
        limit: limitNum,
        totalItems: total,
        totalPages: Math.ceil(total / limitNum),
        hasNext: pageNum < Math.ceil(total / limitNum),
        hasPrev: pageNum > 1,
      },
    };
  },

  searchImages: async (req) => {
    const {
      q = "",
      page = 1,
      limit = 20,
      sortBy = "newest", // newest, mostComments, mostSaved
      userId, // Lọc theo user cụ thể (optional)
    } = req.query;

    // Validate parameters
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    if (isNaN(pageNum) || pageNum < 1) {
      throw new BadRequestException("Page must be a positive number");
    }

    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      throw new BadRequestException(
        "Limit must be between 1 and 100"
      );
    }

    const skip = (pageNum - 1) * limitNum;

    // Build where condition - CHO PHÉP KHÔNG CÓ FILTER
    const whereCondition = {
      AND: [
        // Search condition (optional)
        q.trim()
          ? {
              OR: [
                { imageName: { contains: q.trim() } },
                { description: { contains: q.trim() } },
              ],
            }
          : {},
        // User filter condition (optional)
        userId ? { userId: parseInt(userId) } : {},
      ].filter((condition) => Object.keys(condition).length > 0),
    };

    // Build orderBy based on sort option
    let orderBy = {};
    switch (sortBy) {
      case "mostComments":
        orderBy = [
          { comments: { _count: "desc" } },
          { createdAt: "desc" },
        ];
        break;
      case "mostSaved":
        orderBy = [
          { saved_images: { _count: "desc" } },
          { createdAt: "desc" },
        ];
        break;
      case "oldest":
        orderBy = { createdAt: "asc" };
        break;
      case "newest":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    // Execute search với phân trang
    const [images, total] = await Promise.all([
      prisma.images.findMany({
        where:
          Object.keys(whereCondition).length > 0
            ? whereCondition
            : {},
        skip: skip,
        take: limitNum,
        orderBy: orderBy,
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
      }),
      prisma.images.count({
        where:
          Object.keys(whereCondition).length > 0
            ? whereCondition
            : {},
      }),
    ]);

    return {
      images,
      searchQuery: q || null,
      pagination: {
        currentPage: pageNum,
        limit: limitNum,
        totalItems: total,
        totalPages: Math.ceil(total / limitNum),
        hasNext: pageNum < Math.ceil(total / limitNum),
        hasPrev: pageNum > 1,
      },
      filters: {
        sortBy: sortBy,
        userId: userId ? parseInt(userId) : null,
      },
    };
  },
  getImageDetail: async (req) => {
    const imageId = parseInt(req.params.imageId);

    // Validate imageId
    if (!imageId || isNaN(imageId)) {
      throw new BadRequestException("Invalid image ID");
    }

    // Lấy thông tin chi tiết ảnh
    const image = await prisma.images.findUnique({
      where: { id: imageId },
      select: {
        id: true,
        imageName: true,
        imagePath: true,
        description: true,
        createdAt: true,
        // Thông tin người tạo
        users: {
          select: {
            id: true,
            email: true,
            fullName: true,
            age: true,
            avatar: true,
            createdAt: true,
          },
        },
        // Thống kê
        _count: {
          select: {
            comments: true,
            saved_images: true,
          },
        },
        // Danh sách comments gần nhất (5 comments)
        comments: {
          take: 5,
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            content: true,
            createdAt: true,
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

    if (!image) {
      throw new NotFoundException("Image not found");
    }

    return image;
  },
  getImageComments: async (req) => {
    const imageId = parseInt(req.params.imageId);
    const { page = 1, limit = 20, sortBy = "newest" } = req.query;

    // Validate imageId
    if (!imageId || isNaN(imageId)) {
      throw new BadRequestException("Invalid image ID");
    }

    // Validate pagination parameters
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    if (isNaN(pageNum) || pageNum < 1) {
      throw new BadRequestException("Page must be a positive number");
    }

    if (isNaN(limitNum) || limitNum < 1 || limitNum > 100) {
      throw new BadRequestException(
        "Limit must be between 1 and 100"
      );
    }

    const skip = (pageNum - 1) * limitNum;

    // Kiểm tra image tồn tại
    const imageExist = await prisma.images.findUnique({
      where: { id: imageId },
      select: { id: true },
    });

    if (!imageExist) {
      throw new NotFoundException("Image not found");
    }

    // Build orderBy
    let orderBy = {};
    switch (sortBy) {
      case "oldest":
        orderBy = { createdAt: "asc" };
        break;
      case "newest":
      default:
        orderBy = { createdAt: "desc" };
        break;
    }

    // Lấy danh sách comments với phân trang
    const [comments, total] = await Promise.all([
      prisma.comments.findMany({
        where: { imageId },
        skip: skip,
        take: limitNum,
        orderBy: orderBy,
        select: {
          id: true,
          content: true,
          createdAt: true,
          users: {
            select: {
              id: true,
              fullName: true,
              avatar: true,
              email: true,
            },
          },
        },
      }),
      prisma.comments.count({
        where: { imageId },
      }),
    ]);

    return {
      imageId,
      comments,
      pagination: {
        currentPage: pageNum,
        limit: limitNum,
        totalItems: total,
        totalPages: Math.ceil(total / limitNum),
        hasNext: pageNum < Math.ceil(total / limitNum),
        hasPrev: pageNum > 1,
      },
      sortBy: sortBy,
    };
  },
};
