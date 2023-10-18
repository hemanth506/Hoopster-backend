import { Router } from "express";
import PlayerController from "../controllers/player.controller";

class PlayerRoutes {
  router = Router();
  controller = new PlayerController();

  constructor() {
    this.router.post("/", this.controller.createPlayer);
    this.router.get("/", this.controller.fetctPlayer);
    this.router.delete("/:phoneNumber", this.controller.deletePlayer);
    this.router.put("/:phoneNumber", this.controller.updatePlayer);
  }
}

export default new PlayerRoutes().router;
