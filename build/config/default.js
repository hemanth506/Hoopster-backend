"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.ExpressMiddleware = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
// import mysql from "mysql";
const mysql2_1 = __importDefault(require("mysql2"));
const db_config_1 = __importDefault(require("./db.config"));
class ExpressMiddleware {
    constructor(app) {
        this.app = app;
        this.app.use(body_parser_1.default.json()); // Will help to access JSON request
        this.app.use((0, cors_1.default)()); // Need to think on this.
        this.app.use((0, compression_1.default)());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Methods", "*");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Credentials", "true");
            next();
        });
        console.log("🚀 ~ default.ts:19 ~ Fetched Express Middleware!");
    }
}
exports.ExpressMiddleware = ExpressMiddleware;
exports.connection = mysql2_1.default.createConnection({
    host: db_config_1.default.HOST,
    user: db_config_1.default.USER,
    password: db_config_1.default.PASSWORD,
    database: db_config_1.default.DB
});
