import express from 'express'
import { AppError, ErrorHandler } from './error';

export class createHTTPServer {
  app: express.Application;
  
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupErrorHandlers();
    this.setupGlobalErrorHandlers();
  }

  private setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupErrorHandlers() {
    // this.app.use(ErrorHandler.notFound);
    this.app.use(ErrorHandler.handle);
  }

  private setupGlobalErrorHandlers() {
    ErrorHandler.handleUnhandledRejection();
    ErrorHandler.handleUncaughtException();
  }

  start() {
    this.app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  }

  static app() {
    if (!this.app) {
     throw new AppError('Express app not initialized', 500);
    }
    return this.app;
  }
}
