import {
    AdminInitiateAuthCommand,
    SignUpCommand,
    ChangePasswordCommand,
    ForgotPasswordCommand,
    ConfirmForgotPasswordCommand,
  } from '@aws-sdk/client-cognito-identity-provider';
  import { cognitoClient, cognitoConfig } from '@/config/cognito';
  import { handleCognitoError } from '@/utils/cognitoErrorHandler';
  
  export const signUpUser = async (email: string, password: string) => {
    try {
      const signUpCommand = new SignUpCommand({
        ClientId: cognitoConfig.clientId,
        Username: email,
        Password: password,
        UserAttributes: [
          { Name: 'email', Value: email },
        ],
      });
  
      const response = await cognitoClient.send(signUpCommand);
      return response;
    } catch (error) {
      const { message, statusCode } = handleCognitoError(error);
      throw { message, statusCode };
    }
  };
  
  export const loginUser = async (email: string, password: string) => {
    try {
      const authCommand = new AdminInitiateAuthCommand({
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        ClientId: cognitoConfig.clientId,
        UserPoolId: cognitoConfig.userPoolId,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password,
        },
      });
  
      const response = await cognitoClient.send(authCommand);
      return response;
    } catch (error) {
      const { message, statusCode } = handleCognitoError(error);
      throw { message, statusCode };
    }
  };
  
  export const changePassword = async (accessToken: string, oldPassword: string, newPassword: string) => {
    try {
      const command = new ChangePasswordCommand({
        AccessToken: accessToken,
        PreviousPassword: oldPassword,
        ProposedPassword: newPassword,
      });
  
      const response = await cognitoClient.send(command);
      return response;
    } catch (error) {
      const { message, statusCode } = handleCognitoError(error);
      throw { message, statusCode };
    }
  };
  
  export const forgotPassword = async (email: string) => {
    try {
      const command = new ForgotPasswordCommand({
        ClientId: cognitoConfig.clientId,
        Username: email,
      });
  
      const response = await cognitoClient.send(command);
      return response;
    } catch (error) {
      const { message, statusCode } = handleCognitoError(error);
      throw { message, statusCode };
    }
  };
  
  export const resetPassword = async (email: string, code: string, newPassword: string) => {
    try {
      const command = new ConfirmForgotPasswordCommand({
        ClientId: cognitoConfig.clientId,
        Username: email,
        ConfirmationCode: code,
        Password: newPassword,
      });
  
      const response = await cognitoClient.send(command);
      return response;
    } catch (error) {
      const { message, statusCode } = handleCognitoError(error);
      throw { message, statusCode };
    }
  };
  