export interface ITournament {
  year: number;
  tournamentId: string;
  tournamnentName: string;
}

export interface ITeam {
  teamId: string;
  teamName: string;
}

export interface ITournamentPlayed extends ITournament, ITeam {
  pointsScored: number;
}

export interface IPlayerAchievements extends ITournament {
  achievementId: string;
  achievementTitle: string;
}

export interface IPlayer {
  name: string;
  phoneNumber: number;
  tournamentsPlayed: ITournamentPlayed[];
  email?: string;
  dateOfBirth?: string;
  imageURI?: string;
  favouritePlayer?: string[];
  achievementsReceived?: IPlayerAchievements[];
}

export interface IPlayersRepository {
  createPlayer(playerData: IPlayer): Promise<IPlayer>;
  retrieveAllPlayers(): Promise<IPlayer[]>
  retrievePlayerByPhoneNumber(phoneNumber: number): Promise<IPlayer | undefined>;
  removePlayerByPhoneNumber(phoneNumber: number): Promise<IPlayer | undefined>;
  updatePlayerByPhoneNumber(phoneNumber: number, playerData: IPlayer): Promise<IPlayer | undefined>;
}
