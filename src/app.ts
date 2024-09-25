import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { setupDocs } from './config/swagger';
import logger from './utils/logger';
import { errorHandler } from './middlewares/errorHandler';
import { NotFoundError } from './utils/customErrors';
import { sequelize, testConnection } from '@/config/database';


dotenv.config();

const app: Application = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(morgan('combined'));


app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'App is healthy' });
});


setupDocs(app);


app.all('*', (req: Request, _res:Response, next: NextFunction) => {
  next(new NotFoundError(`Can't find ${req.originalUrl} on this server`));
});


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {

      await testConnection();
  
      await sequelize.sync({ alter: true });
  
      app.listen(PORT, () => {
        logger.info(`Server is running on http://localhost:${PORT}`);
        logger.info(`Swagger Docs available at http://localhost:${PORT}/docs`);
        logger.info(`ReDoc available at http://localhost:${PORT}/redoc`);
      });
    } catch (error) {
      logger.error('Failed to start the server:', error);
      process.exit(1);
    }
  };

  startServer();

export default app;
