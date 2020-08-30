import * as express from 'express'
import { Request, Response } from 'express'
import { PlayerService } from '../services/aoe2ApiService';


export class HomeController {
    public path = '/'

    public router = express.Router();
    private _playerService: PlayerService;
    
    constructor() {
        this.initRoutes();
        this._playerService = new PlayerService();
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = async (req: Request, res: Response) => {
        
        let result = await this._playerService.getPlayers(2);
        res.send(result);
    }
}