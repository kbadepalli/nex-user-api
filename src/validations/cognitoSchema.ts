import Joi from 'joi';

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  code: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
});

export const changePasswordSchema = Joi.object({
  accessToken: Joi.string().required(),
  oldPassword: Joi.string().min(8).required(),
  newPassword: Joi.string().min(8).required(),
});
