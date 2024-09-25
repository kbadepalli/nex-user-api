import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { setupDocs } from './config/swagger';
import logger from './utils/logger';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './utils/customErrors';


dotenv.config();

const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));


app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'App is healthy' });
});


setupDocs(app);


app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Can't find ${req.originalUrl} on this server`));
});


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
  logger.info(`Swagger Docs available at http://localhost:${PORT}/docs`);
  logger.info(`ReDoc available at http://localhost:${PORT}/redoc`);
});

export default app;
