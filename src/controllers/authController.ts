import { Request, Response, NextFunction } from 'express';
import { signUpUser, loginUser, forgotPassword, resetPassword, changePassword } from '../services/cognitoService';
import { handleApplicationError } from '../utils/customErrors';


export const signUp = async (req: Request, res: Response, _next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const result = await signUpUser(email, password);
    res.status(201).json(result);
  } catch (error) {
    const { message, statusCode } = handleApplicationError(error);
    res.status(statusCode).json({ error: message });
  }
};

export const signIn = async (req: Request, res: Response, _next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (error) {
    const { message, statusCode } = handleApplicationError(error);
    res.status(statusCode).json({ error: message });
  }
};

export const forgotPasswordController = async (req: Request, res: Response, _next: NextFunction) => {
  const { email } = req.body;
  try {
    const result = await forgotPassword(email);
    res.status(200).json(result);
  } catch (error) {
    const { message, statusCode } = handleApplicationError(error);
    res.status(statusCode).json({ error: message });
  }
};

export const resetPasswordController = async (req: Request, res: Response, _next: NextFunction) => {
  const { email, code, newPassword } = req.body;
  try {
    const result = await resetPassword(email, code, newPassword);
    res.status(200).json(result);
  } catch (error) {
    const { message, statusCode } = handleApplicationError(error);
    res.status(statusCode).json({ error: message });
  }
};


export const changePasswordController = async (req: Request, res: Response, _next: NextFunction) => {
  const { accessToken, oldPassword, newPassword } = req.body;
  try {
    const result = await changePassword(accessToken, oldPassword, newPassword);
    res.status(200).json(result);
  } catch (error) {
    const { message, statusCode } = handleApplicationError(error);
    res.status(statusCode).json({ error: message });
  }
};
