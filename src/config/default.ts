import { Application, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import { envVar } from "../env";

export class ExpressMiddleware {
  app: Application;
  constructor(app: Application) {
    this.app = app;
    this.app.use(bodyParser.json()); // Will help to access JSON request
    this.app.use(cors());
    this.app.use(compression());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Methods", "*");
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
    console.log("👍 ~ Fetched Express Middleware!");
  }
}

export class DatabaseConnection {
  mongoose: any;
  constructor(mongoose: any) {
    this.mongoose = mongoose;
    if (envVar.MONGODB_URI !== undefined) {
      console.log("🛩️  ~ MONGODB_URI:", envVar.MONGODB_URI);
      this.mongoose.connect(envVar.MONGODB_URI);
      this.mongoose.connection.on("error", (err: Error) => {
        console.log("💢  ~ DatabaseConnection ~ error:", err);
      });
      console.log("❤️  ~ Database connected!");
    } else {
      console.log("💢  ~ MONGODB_URI not available:", envVar.MONGODB_URI);
      throw new Error("Database connection error");
    }
  }
}
