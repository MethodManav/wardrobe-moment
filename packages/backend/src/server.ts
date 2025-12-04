import express from "express";
export class createHTTPServer {
  app: express.Application;
  constructor() {
    this.app = express();
  }
  start() {
    this.app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  }
  static app() {
    if (!this.app) {
      throw new Error("Server not started yet");
    }
    return this.app;
  }
}
