export namespace Payload {
  export interface Tournament {
    endDate: string,
    format: string,
    id: string,
    logoUrl: string,
    name: string,
    startDate: string,
    tier: string,
    twitchUrl: string
  }

  export interface Series {
    id: number,
    awayPlayer: string,
    awayScore: number,
    homePlayer: string,
    homeScore: number,
    date: string,
    time: string,
    tournament: string,
    tournamentRound: string,
    tournamentRoundPhase: string
  }
}