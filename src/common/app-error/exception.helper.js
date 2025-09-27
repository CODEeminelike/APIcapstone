import { statusCodes } from "./status-code.helper";

export class BadRequestException extends Error {
  constructor(message = "BadRequestException") {
    super(message);
    this.code = statusCodes.BAD_REQUEST;
  }
}

// 403 => refresh-token
export class ForbiddenException extends Error {
  constructor(message = "ForbiddenException") {
    super(message);
    this.code = statusCodes.FORBIDDEN;
  }
}

// 401 => logout
export class UnauthorizedException extends Error {
  constructor(message = "UnauthorizedException") {
    super(message);
    this.code = statusCodes.UNAUTHORIZED;
  }
}
//registered

export class ConflictException extends Error {
  constructor(message = "ConflictException") {
    super(message);
    this.name = "ConflictException"; // Thêm name
    this.code = statusCodes.CONFLICT; // 409
    this.statusCode = statusCodes.CONFLICT; // Thêm statusCode để error handler dễ xử lý
  }
}

export class NotFoundException extends Error {
  constructor(message = "NotFoundException") {
    super(message);

    this.code = statusCodes.NOT_FOUND; // 404
  }
}
