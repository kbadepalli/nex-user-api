import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

export const cognitoConfig = {
  region: process.env.AWS_REGION!,
  userPoolId: process.env.COGNITO_USER_POOL_ID!,
  clientId: process.env.COGNITO_CLIENT_ID!,
};

export const cognitoClient = new CognitoIdentityProviderClient({
  region: cognitoConfig.region,
});
