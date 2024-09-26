import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import logger from '../utils/logger';

export const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);

    if (error) {
        logger.warn('Joi Validation Error:', error.details);
      res.status(400).json({
        status: 'fail',
        message: error.details[0].message,
      });
    } else {
      next();
    }
  };
};
