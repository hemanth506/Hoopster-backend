import express, { Request, Response, Application } from "express";
import { DatabaseConnection, ExpressMiddleware, connection } from "./config/default";
import AdminRoute from "./routes/admin.route";
import { config } from "dotenv";
config();

const app: Application = express();
new ExpressMiddleware(app); // Establish basic middleware
express.urlencoded({ extended: false });
new DatabaseConnection(); // Establish database connection

/* ROUTES */
app.use("/api/admin", AdminRoute); // Admin routes


const port: string | undefined = process.env.PORT;
app.listen(port, () => {
  console.log(`🚀 ~ App running successfully in http://localhost:${port}`);
});
