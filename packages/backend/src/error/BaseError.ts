export abstract class BaseError extends Error {
  abstract readonly statusCode: number;
  abstract readonly isOperational: boolean;

  constructor(message: string, public readonly name: string = "BaseError") {
    super(message);
    this.name = name;

    if ((Error as any).captureStackTrace) {
      (Error as any).captureStackTrace(this, this.constructor);
    }
  }
}

export class AppError extends BaseError {
  readonly isOperational = true;

  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly name: string = "AppError"
  ) {
    super(message, name);
  }
}
