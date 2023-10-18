import { PlayerModel } from "./player.model";
import { IPlayer } from "../../interfaces/player.interface";

export const createPlayer = (playerData: IPlayer) => PlayerModel.create(playerData);
export const fetchAllPlayers = () => PlayerModel.find();
export const fetchPlayerByPhoneNumber = (phoneNumber: number) =>
  PlayerModel.findOne({ phoneNumber });
export const updatePlayerByPhoneNumber = (
  phoneNumber: number,
  playerData: IPlayer
) => PlayerModel.findOneAndUpdate({ phoneNumber }, playerData);
export const deletePlayerByPhoneNumber = (phoneNumber: number) =>
  PlayerModel.deleteOne({ phoneNumber });
