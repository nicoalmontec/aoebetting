import App from './app'
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import { PORT } from './config/constants';

import * as bodyParser from 'body-parser'
import {HomeController} from './controllers/'

const app = new App({
    port: PORT,
    controllers: [
        new HomeController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        expressWinston.logger({
                transports: [
                  new winston.transports.Console()
                ]
              })
    ]
})

app.listen()