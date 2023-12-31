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
    tournamentId: string,
    tournamentRound: string,
    tournamentRoundPhase: string,
    logoUrl: string
  }

  export interface Match {
    id: number,
    seriesId: number,
    homeCivilization: string,
    awayCivilization: string,
    winnerPlayer: string,
    map: string
  }
}

export namespace Generic {
  export interface KeyValuePair<T> {
    key: string,
    value: T
  }
}

export namespace Component {
  export type TabData = Generic.KeyValuePair<string>;
}