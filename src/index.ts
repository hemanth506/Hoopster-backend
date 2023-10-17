import express, { Application } from "express";
import { DatabaseConnection, ExpressMiddleware } from "./config/default";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

// Routers
import AdminRoute from "./routes/admin.route";
import PlayerRoute from "./routes/player.route";

const app: Application = express();
new ExpressMiddleware(app); // Establish basic middleware
express.urlencoded({ extended: false });
new DatabaseConnection(mongoose); // Establish database connection

/* ROUTES */
app.use("/api/admin", AdminRoute); // Admin routes
app.use("/api/player", PlayerRoute); // Player routes


const port: string | undefined = process.env.PORT;
app.listen(port, () => {
  console.log(`🚀 ~ App running successfully in http://localhost:${port}`);
});
