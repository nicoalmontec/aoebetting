import * as express from 'express'
import { Request, Response } from 'express'
import { ApiPlayerService } from '../services/aoe2ApiService';


export class HomeController {
    public path = '/'

    public router = express.Router();
    private _playerService: ApiPlayerService;
    
    constructor() {
        this.initRoutes();
        this._playerService = new ApiPlayerService();
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = async (req: Request, res: Response) => {
        
        let result = await this._playerService.getPlayers(2);
        res.send(result);
    }
}