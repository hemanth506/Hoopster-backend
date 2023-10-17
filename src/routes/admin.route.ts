import { Router } from "express";
import AdminController from "../controllers/admin.controller";

class AdminRoutes {
  router = Router();
  controller = new AdminController();

  constructor() {
    this.router.get("/", this.controller.fetchAdmin);
    this.router.post("/", this.controller.addNewAdmin);
    this.router.delete("/", this.controller.deleteAdmin);
  }
}

export default new AdminRoutes().router;
