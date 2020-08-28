import { Player } from "../model/player";
import {aoe2net} from "../config/apiUrl";

export interface IPlayerService {
    getPlayers(): Array<Player>;
    getPlayer(id: Number): Player;
}

export class PlayerService implements IPlayerService {
    getPlayers(): Player[] {
        throw new Error("Method not implemented.");
    }
    getPlayer(id: Number): Player {
        throw new Error("Method not implemented.");
    }
}