export interface Match {
    matchID:           string;
    lobbyID:           number;
    matchUUID:         string;
    version:           string;
    name:              string;
    numPlayers:        number;
    numSlots:          number;
    averageRating:     number;
    cheats:            boolean;
    fullTechTree:      boolean;
    endingAge:         number;
    expansion:         string;
    gameType:          number;
    hasCustomContent:  boolean;
    hasPassword:       boolean;
    lockSpeed:         boolean;
    lockTeams:         boolean;
    mapSize:           number;
    mapType:           number;
    pop:               number;
    ranked:            boolean;
    leaderboardID:     number;
    ratingType:        number;
    resources:         number;
    rms:               string;
    scenario:          string;
    server:            string;
    sharedExploration: boolean;
    speed:             number;
    startingAge:       number;
    teamTogether:      boolean;
    teamPositions:     boolean;
    treatyLength:      number;
    turbo:             boolean;
    victory:           number;
    victoryTime:       number;
    visibility:        number;
    opened:            number;
    started:           number;
    finished:          number;
    //players:           Player[];
}

export interface ApiContent {
    language:    string;
    age:         Description[];
    civ:         Description[];
    gameType:    Description[];
    leaderboard: Description[];
    mapSize:     Description[];
    mapType:     Description[];
    ratingType:  Description[];
    resources:   Description[];
    speed:       Description[];
    victory:     Description[];
    visibility:  Description[];
}

export interface Description{
 id: number;
 name: string;
}

export class Match{
    constructor(
        private matchId: string,
        private map: Description,
        private openedDate: number,
        private startedDate: number,
        private finishedDate: number) {
    }
    
    public get getMatchId() : string {
        return this.matchId;
    }
    
    public get getMap() : Description {
        return this.map;
    }
    
    public get getOpenedDate() : number {
        return this.openedDate;
    }
    
    public get getStartedDate() : number {
        return this.startedDate;
    }

    public get getFinishedDate() : number {
        return this.finishedDate;
    }
}