// src/validation/validate.js

import { BadRequestException } from "../common/app-error/exception.helper";

// Validate fullName
export const validateFullName = (fullName) => {
  if (!fullName || fullName.trim() === "") {
    throw new BadRequestException("FullName is required");
  }

  const trimmedName = fullName.trim();

  if (trimmedName.length > 100) {
    throw new BadRequestException(
      "FullName must be less than 100 characters"
    );
  }

  if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
    throw new BadRequestException(
      "FullName can only contain letters and spaces"
    );
  }

  return trimmedName;
};

// Validate age
export const validateAge = (age) => {
  if (age === null || age === undefined || age === "") {
    return null;
  }

  if (!/^[0-9]+$/.test(age.toString())) {
    throw new BadRequestException("Age must be a positive integer");
  }

  const ageNumber = parseInt(age);
  if (ageNumber < 1 || ageNumber > 150) {
    throw new BadRequestException("Age must be between 1 and 150");
  }

  return ageNumber;
};

// Validate avatar
export const validateAvatar = (avatar) => {
  if (avatar === null || avatar === undefined || avatar === "") {
    return null;
  }

  // Luôn trả về giá trị avatar mà không validate gì cả
  return avatar.toString().trim();
};
