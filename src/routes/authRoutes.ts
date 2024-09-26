import express from 'express';
import {
  signUp,
  signIn,
  forgotPasswordController,
  resetPasswordController,
  changePasswordController
} from '../controllers/authController';
import { validateRequest } from '../middlewares/validationMiddleware';
import {
  signUpSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema
} from '@/validations/cognitoSchema';

const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignUp'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Validation or signup error
 */
router.post('/signup', validateRequest(signUpSchema), signUp);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in an existing user
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Validation or login error
 */
router.post('/login', validateRequest(loginSchema), signIn);

/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Request a password reset (send code)
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForgotPassword'
 *     responses:
 *       200:
 *         description: Password reset code sent
 *       400:
 *         description: Error sending password reset code
 */
router.post('/forgot-password', validateRequest(forgotPasswordSchema), forgotPasswordController);

/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset password using the verification code
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPassword'
 *     responses:
 *       200:
 *         description: Password reset successful
 *       400:
 *         description: Invalid code or error
 */
router.post('/reset-password', validateRequest(resetPasswordSchema), resetPasswordController);

/**
 * @swagger
 * /auth/reset-password-old:
 *   post:
 *     summary: Reset password using the old password
 *     tags: [Auth]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResetPasswordWithOldPassword'
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Validation or password change error
 */
router.post('/reset-password-old', validateRequest(changePasswordSchema), changePasswordController);

export default router;
