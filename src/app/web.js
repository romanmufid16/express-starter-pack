import express from 'express';
import helmet from 'helmet';
import cors from 'cors'
import { errorMiddleware } from '../middlewares/errorHandler.js';

export const web = express();

web.use(helmet());
web.use(cors());
web.use(express.json());

// Your routes API

web.use(errorMiddleware);
