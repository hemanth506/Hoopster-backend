import { PlayerModel } from "./player.model";
import { IPlayer } from "../../interfaces/player.interface";

export const createPlayer = (player: IPlayer) => PlayerModel.create(player);
export const fetchPlayer = (phoneNumber: number) =>
  PlayerModel.findOne({ phoneNumber });
export const updatePlayer = (phoneNumber: number, player: IPlayer) =>
  PlayerModel.findOneAndUpdate({ phoneNumber }, player);
export const deletePlayer = (phoneNumber: number) =>
  PlayerModel.deleteOne({ phoneNumber });
