import { Request, Response } from "express";
import playerRepository from "../repositories/player.repository";
import { IPlayer, ITournamentPlayed } from "../interfaces/player.interface";

export default class PlayerController {
  async fetctPlayer(req: Request, res: Response) {
    try {
      const playerPhoneNumber: number | undefined = Number(
        req.body.phoneNumber
      );
      let response = {};
      if (playerPhoneNumber) {
        const data: IPlayer | undefined =
          await playerRepository.retrievePlayerByPhoneNumber(playerPhoneNumber);
        console.log("🉑 Player fetched 🉑", data);
        if (data) {
          response = { result: "Successful", data };
          res.status(200).send(response);
        } else {
          console.log(" ❌ Error while fetching player ❌");
          response = {
            result: "Unsuccessful",
            err: { message: "Player not found" },
          };
          res.status(404).send(response);
        }
      } else {
        const data: IPlayer[] = await playerRepository.retrieveAllPlayers();
        console.log("🉑 All players fetched 🉑", data);
        response = { result: "Successful", data };
        res.status(200).send(response);
      }
      return res;
    } catch (error) {
      console.log(" ❌ Error while fetching players ❌");
      const response = { result: "Unsuccessful", error };
      return res.status(500).send(response);
    }
  }

  async deletePlayer(req: Request, res: Response) {
    try {
      const playerPhoneNumber: number = Number(req.params.phoneNumber);
      if (!playerPhoneNumber) {
        const response = {
          result: "Unsuccessful",
          err: {
            message: "Invalid request data",
          },
        };
        return res.status(400).send(response);
      }
      const deletedPlayer: IPlayer | undefined = await playerRepository.removePlayerByPhoneNumber(
        playerPhoneNumber
      );
      if (deletedPlayer) {
        console.log("🉑 Player deleted 🉑", deletedPlayer);
        res.status(204).send();
      } else {
        console.log("🉑 Player not found 🉑", deletedPlayer);
        const response = {
          result: "Unsuccessful",
          err: { message: "Player not found" },
        };
        res.status(404).send(response);
      }
      return res;
    } catch (error) {
      console.log(" ❌ Error while deleting player ❌");
      const response = { result: "Unsuccessful", error };
      return res.status(500).send(response);
    }
  }

  async createPlayer(req: Request, res: Response) {
    try {
      const name: string = req.body.name;
      const phoneNumber: number = Number(req.body.phoneNumber);

      const tournamnentsPlayedData: ITournamentPlayed =
        req.body.tournamentsPlayed;
      const year: number = tournamnentsPlayedData.year;
      const tournamentId: string = tournamnentsPlayedData.tournamentId;
      const tournamnentName: string = tournamnentsPlayedData.tournamnentName;
      const teamId: string = tournamnentsPlayedData.teamId;
      const teamName: string = tournamnentsPlayedData.teamName;
      const pointsScored: number = 0; // initial score

      if (
        !name ||
        !phoneNumber ||
        !year ||
        !tournamentId ||
        !tournamnentName ||
        !teamId ||
        !teamName
      ) {
        const response = {
          result: "Unsuccessful",
          err: {
            message: "Invalid request data",
          },
        };
        return res.status(400).send(response);
      }
      const playerData: IPlayer = {
        name,
        phoneNumber,
        tournamentsPlayed: [
          {
            year,
            tournamentId,
            tournamnentName,
            teamId,
            teamName,
            pointsScored,
          },
        ],
      };

      const newPlayer = await playerRepository.createPlayer(playerData);
      console.log("🉑 New player created 🉑", newPlayer);
      const response = { result: "Successful", data: newPlayer };
      return res.status(201).send(response);
    } catch (error) {
      console.log(" ❌ Error while creating new player ❌");
      const response = { result: "Unsuccessful", error };
      return res.status(500).send(response);
    }
  }

  async updatePlayer(req: Request, res: Response) {
    try {
      const playerPhoneNumber: number = Number(req.params.phoneNumber);

      const name: string = req.body.name;
      const phoneNumber: number = Number(req.body.phoneNumber);

      const tournamnentsPlayedData: ITournamentPlayed =
        req.body.tournamentsPlayed;
      const year: number = tournamnentsPlayedData.year;
      const tournamentId: string = tournamnentsPlayedData.tournamentId;
      const tournamnentName: string = tournamnentsPlayedData.tournamnentName;
      const teamId: string = tournamnentsPlayedData.teamId;
      const teamName: string = tournamnentsPlayedData.teamName;
      const pointsScored: number | undefined =
        tournamnentsPlayedData.pointsScored; // new score

      if (
        !playerPhoneNumber ||
        !name ||
        !phoneNumber ||
        !year ||
        !tournamentId ||
        !tournamnentName ||
        !teamId ||
        !teamName ||
        !pointsScored
      ) {
        const response = {
          result: "Unsuccessful",
          err: {
            message: "Invalid request data",
          },
        };
        return res.status(400).send(response);
      }

      const newPlayerData: IPlayer = {
        name,
        phoneNumber,
        tournamentsPlayed: [
          {
            year,
            tournamentId,
            tournamnentName,
            teamId,
            teamName,
            pointsScored,
          },
        ],
      };

      const updatedPlayer: IPlayer | undefined = await playerRepository.updatePlayerByPhoneNumber(
        playerPhoneNumber,
        newPlayerData
      );
      if(updatedPlayer) {
        console.log("🉑 Player data updated 🉑");
        return res.status(204).send();
      } else {
        console.log("🉑 Player not found 🉑", updatedPlayer);
        const response = {
          result: "Unsuccessful",
          err: { message: "Player not found" },
        };
        res.status(404).send(response);
      }
    } catch (error) {
      console.log(" ❌ Error while updating new player data ❌");
      const response = { result: "Unsuccessful", error };
      return res.status(500).send(response);
    }
  }
}
