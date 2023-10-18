import { Schema, model } from "mongoose";
import {
  IPlayer,
  ITournamentPlayed,
  IPlayerAchievements,
} from "../../interfaces/player.interface";

const tournamentPlayedSchema: Schema = new Schema<ITournamentPlayed>({
  year: { type: Number, required: true },
  tournamentId: { type: String, required: true },
  tournamnentName: { type: String, required: true },
  teamId: { type: String, required: true },
  teamName: { type: String, required: true },
  pointsScored: { type: Number, required: true },
});

const playerAchievementsSchema: Schema = new Schema<IPlayerAchievements>({
  year: { type: Number, required: true },
  tournamentId: { type: String, required: true },
  tournamnentName: { type: String, required: true },
  achievementId: { type: String, required: true },
  achievementTitle: { type: String, required: true },
});

const playerSchema: Schema = new Schema<IPlayer>(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    tournamentsPlayed: { type: [tournamentPlayedSchema], required: true },
    email: { type: String, unique: true },
    dateOfBirth: { type: String },
    imageURI: { type: String },
    favouritePlayer: { type: [String] },
    achievementsReceived: { type: [playerAchievementsSchema] },
  },
  {
    timestamps: true,
  }
);

export const PlayerModel = model<IPlayer>("Player", playerSchema);
