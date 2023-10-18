import { IPlayer, IPlayersRepository } from "../interfaces/player.interface";
import {
  createPlayer,
  deletePlayerByPhoneNumber,
  fetchAllPlayers,
  fetchPlayerByPhoneNumber,
  updatePlayerByPhoneNumber,
} from "../models/Players/player";

class PlayerRepository implements IPlayersRepository {
  retrieveAllPlayers(): Promise<IPlayer[]> {
    return new Promise((resolve, reject) => {
      try {
        const allPlayers: any = fetchAllPlayers();
        console.log("🚀 Fetch all players 🚀");
        resolve(allPlayers);
      } catch (err) {
        reject(err);
      }
    });
  }

  retrievePlayerByPhoneNumber(
    phoneNumber: number
  ): Promise<IPlayer | undefined> {
    return new Promise((resolve, reject) => {
      try {
        const player: any = fetchPlayerByPhoneNumber(phoneNumber);
        console.log("🚀 Fetch player by phone number🚀");
        resolve(player);
      } catch (err) {
        reject(err);
      }
    });
  }

  removePlayerByPhoneNumber(phoneNumber: number): Promise<IPlayer | undefined> {
    return new Promise((resolve, reject) => {
      try {
        const deletedPlayer: any = deletePlayerByPhoneNumber(phoneNumber);
        console.log("🚀 Player deleted 🚀");
        resolve(deletedPlayer);
      } catch (err) {
        reject(err);
      }
    });
  }

  createPlayer(playerData: IPlayer): Promise<IPlayer> {
    return new Promise((resolve, reject) => {
      try {
        const createdPlayer: any = createPlayer(playerData);
        console.log("🚀 New player created 🚀", createdPlayer);
        resolve(createdPlayer);
      } catch (err) {
        reject(err);
      }
    });
  }

  updatePlayerByPhoneNumber(
    phoneNumber: number,
    playerData: IPlayer
  ): Promise<IPlayer | undefined> {
    return new Promise ((resolve, reject) => {
      try {
        const updatePlayer: any = updatePlayerByPhoneNumber(phoneNumber, playerData);
        console.log("🚀 Updated player 🚀", updatePlayer);
        resolve(updatePlayer);
      } catch (err) {
        reject(err);
      }
    })
  }
}

export default new PlayerRepository();
