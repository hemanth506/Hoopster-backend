import { Application, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import mysql from "mysql2";
import dbConfig from "./db.config";

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
    console.log("🚀 ~ Fetched Express Middleware!");
  }
}

export const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

export class DatabaseConnection {
  connection: any;
  constructor() {
    this.connection = connection;
    this.connection.connect(function (err: Error) {
      if (err) throw err;
      console.log("🚀 ~ Database Connected Successfully.");
    });
  }
}
