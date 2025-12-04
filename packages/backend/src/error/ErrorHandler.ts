import { Request, Response, NextFunction } from "express";
import { BaseError } from "./BaseError.js";

export interface ErrorResponse {
  success: false;
  error: {
    name: string;
    message: string;
    statusCode: number;
    timestamp: string;
    path: string;
    stack?: string;
  };
}

export class ErrorHandler {

  static handle() {
    return (error: Error, req: Request, res: Response, next: NextFunction): void => {
      let statusCode = 500;
      let name = "InternalServerError";
      let message = "Something went wrong";


      if (error instanceof BaseError) {
        statusCode = error.statusCode;
        name = error.name;
        message = error.message;
      }

      else if (error.name === "ValidationError") {
        statusCode = 400;
        name = "ValidationError";
        message = error.message;
      }
      else if (error.name === "MongoError" || error.name === "MongooseError") {
        statusCode = 500;
        name = "DatabaseError";
        message = "Database operation failed";
      }
      else if (error.name === "JsonWebTokenError") {
        statusCode = 401;
        name = "UnauthorizedError";
        message = "Invalid token";
      }
      else if (error.name === "TokenExpiredError") {
        statusCode = 401;
        name = "UnauthorizedError";
        message = "Token expired";
      }
      else if (error.message) {
        message = error.message;
      }
      const errorResponse: ErrorResponse = {
        success: false,
        error: {
          name,
          message,
          statusCode,
          timestamp: new Date().toISOString(),
          path: req.path,
        },
      };
      if (process.env.NODE_ENV === "development") {
        errorResponse.error.stack = error.stack;
      }
      console.error(`[${errorResponse.error.timestamp}] ${name}: ${message}`);
      if (process.env.NODE_ENV === "development") {
        console.error(error.stack);
      }

      res.status(statusCode).json(errorResponse);
    };
  }

  static notFound() {
    return (req: Request, res: Response): void => {
      const errorResponse: ErrorResponse = {
        success: false,
        error: {
          name: "NotFoundError",
          message: `Route ${req.method} ${req.path} not found`,
          statusCode: 404,
          timestamp: new Date().toISOString(),
          path: req.path,
        },
      };

      res.status(404).json(errorResponse);
    };
  }


  static asyncHandler(fn: Function) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }


  static handleUnhandledRejection() {
    process.on("unhandledRejection", (reason: any, promise: Promise<any>) => {
      console.error("Unhandled Rejection at:", promise, "reason:", reason);
      // Close server & exit process
      process.exit(1);
    });
  }

  static handleUncaughtException() {
    process.on("uncaughtException", (error: Error) => {
      console.error("Uncaught Exception:", error);
      // Close server & exit process
      process.exit(1);
    });
  }
}
