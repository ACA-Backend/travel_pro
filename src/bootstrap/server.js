import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import {createServer} from 'http';
import { NotFoundError } from '../lib/error-definitions.js';
import errorMiddleware from "../app/middleware/error_middleware.js";
import { authRouter } from '../routes/api.js';
import cookieParser from "cookie-parser";
import config from '../config/app.config.js';
import { vehiclesRouter } from '../routes/vehicles.js';
import { getSecondsFromNow } from '../lib/util.js';


const app = express();
const server = createServer(app);

app.use(cors() );
app.use(compression() );
app.use(helmet() );
app.use(express.json() );
app.use(express.urlencoded({extended: true}));
app.use(
    cookieParser({
        httpOnly: true,
        secure: config.environment === "production",
        sameSite: "strict",
        maxAge: getSecondsFromNow(config.JWT.expiration),
    })
);
app.get('/health', (req, res) => 
{
    res.status(200).json({
        success: true,
        message: 'server is up and running'
    });
});

app.use('/api/v1/auth', authRouter);
app.use("/api/v1/vehicles", vehiclesRouter);

app.use('*', (req, res) => {
    throw new NotFoundError(
        `the requested route ${req.originalUrl} does not exist on this server`
    );
});

app.use(errorMiddleware);

export
{
    app,
    server
};
