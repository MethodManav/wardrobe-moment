import { AppError } from "./BaseError.js";

export class ValidationError extends AppError {
  constructor(message: string, public readonly field?: string) {
    super(message, 400, "ValidationError");
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string = "Resource") {
    super(`${resource} not found`, 404, "NotFoundError");
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized access") {
    super(message, 401, "UnauthorizedError");
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden access") {
    super(message, 403, "ForbiddenError");
  }
}

export class ConflictError extends AppError {
  constructor(message: string = "Resource already exists") {
    super(message, 409, "ConflictError");
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = "Bad request") {
    super(message, 400, "BadRequestError");
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = "Internal server error") {
    super(message, 500, "InternalServerError");
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = "Database operation failed") {
    super(message, 500, "DatabaseError");
  }
}

export class NetworkError extends AppError {
  constructor(message: string = "Network operation failed") {
    super(message, 503, "NetworkError");
  }
}
