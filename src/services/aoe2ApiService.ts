import { Player } from "../model/player";
import {aoe2net} from "../config/apiUrl";
import { HttpWrapper } from "../helpers/httpWrapper";
import { Match } from "../model/match";

export interface IPlayerService {
    getPlayers(count: number): Promise<Array<Player>>;
    getPlayerMatchHistory(profileId: number, numberOfMatches: number):  Promise<Array<Match>>;
}

export class PlayerService implements IPlayerService {

    private http: HttpWrapper;
    /**
     *
     */
    constructor() {
        this.http = new HttpWrapper(aoe2net);
    }
    
    async getPlayerMatchHistory(profileId: number, numberOfMatches: number): Promise<any[]> {

       let apiParams = `player/matches?game=aoe2de&profile_id=${profileId}&count=${numberOfMatches}`;
       
       let matches = await this.http.get(apiParams);

       return matches;
    }
    
    async getPlayers(count: number): Promise<any[]> {
        let apiParams = `leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=${count}`;

         let play = await this.http.get(apiParams);

         return play;
    }

    getPlayer(profileId: Number): Player {
        throw new Error("Method not implemented.");
    }
}