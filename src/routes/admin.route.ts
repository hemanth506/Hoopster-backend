import { Router } from "express";
import AdminController from "../controllers/admin.controller";

class AdminRoutes {
  router = Router();
  controller = new AdminController();

  constructor() {
    this.router.get("/", this.controller.fetchAllAdmins);
    this.router.post("/", this.controller.addNewAdmin);
    this.router.delete("/", this.controller.deleteAdmin);
    this.router.get("/:phoneNumber", this.controller.fetchAdminByPhoneNumber);
  }
}

export default new AdminRoutes().router;
