import { ApiPlayer, Description, ApiContent } from "../model/apiInterfaces";
import {aoe2net} from "../config/apiUrl";
import { HttpWrapper } from "../helpers/httpWrapper";
import { Match } from "../model/apiInterfaces";

export interface IApiPlayerService {
    getPlayers(count: number): Promise<Array<ApiPlayer>>;
    getPlayerMatchHistory(profileId: number, numberOfMatches: number):  Promise<Array<Match>>;
    getApiMaps(): Promise<Array<Description>>;
}

export class ApiPlayerService implements IApiPlayerService {

    private http: HttpWrapper;
    /**
     * 
     */
    constructor() {
        this.http = new HttpWrapper(aoe2net);
    }
   

    async getApiMaps(): Promise<Description[]> {
        let apiParams = `strings?game=aoe2de&language=en`;

        let content = <ApiContent> await this.http.get(apiParams);
        
        return content.mapType;
    }
    
     /**
     * Returns the games played by a player.
     *
     * @param profileId - the profile id from aoe2.net of the player
     * @param numberOfMatches - number of games to retrieve max is 1000
     * @returns Match[] object containing the list of games
     *
     */
    async getPlayerMatchHistory(profileId: number, numberOfMatches: number): Promise<Match[]> {

       let apiParams = `player/matches?game=aoe2de&profile_id=${profileId}&count=${numberOfMatches}`;
       
       let matches = await this.http.get(apiParams);

       return <Match[]>matches;
    }
    
    /**
     * Returns the players sorted descending by their highest elo
     *
     * @param count - number of players to retrieve max is 10000
     * @returns ApiPlayer[] object containing the list of players
     *
     */
    async getPlayers(count: number): Promise<ApiPlayer[]> {
        let apiParams = `leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=${count}`;

         let play = await this.http.get(apiParams);

         return <ApiPlayer[]>play;
    }
}