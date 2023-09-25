"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = require("./config/default");
const app = (0, express_1.default)();
new default_1.ExpressMiddleware(app);
express_1.default.urlencoded({ extended: false });
