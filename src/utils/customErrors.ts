import logger from './logger';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = 'Bad Request') {
    super(message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Not Found') {
    super(message, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Conflict') {
    super(message, 409);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'Internal Server Error') {
    super(message, 500);
  }
}

export const handleApplicationError = (error: unknown) => {
  if (error instanceof AppError) {

    logger.error(`Application Error: ${error.message}`);
    return {
      message: error.message,
      statusCode: error.statusCode,
    };
  } else if (error instanceof Error) {

    logger.error(`Internal Server Error: ${error.message}`);
    return {
      message: error.message,
      statusCode: 500,
    };
  } else {

    logger.error('Unknown Error: An unexpected error occurred');
    return {
      message: 'An unexpected error occurred',
      statusCode: 500,
    };
  }
};
