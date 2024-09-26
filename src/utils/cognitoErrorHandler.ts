export const handleCognitoError = (error: any) => {
    let message = 'An error occurred with Cognito';
    let statusCode = 400;
  
    if (error.code) {
      switch (error.code) {
        case 'UsernameExistsException':
          message = 'User already exists';
          statusCode = 409;
          break;
        case 'UserNotFoundException':
          message = 'User not found';
          statusCode = 404;
          break;
        case 'NotAuthorizedException':
          message = 'Incorrect username or password';
          statusCode = 401;
          break;
        case 'PasswordResetRequiredException':
          message = 'Password reset is required for this user';
          statusCode = 403;
          break;
        case 'InvalidPasswordException':
          message = 'Password does not meet the required criteria';
          statusCode = 400;
          break;
        case 'CodeMismatchException':
          message = 'Invalid verification code provided';
          statusCode = 400;
          break;
        case 'ExpiredCodeException':
          message = 'Verification code has expired';
          statusCode = 400;
          break;
        case 'LimitExceededException':
          message = 'Attempt limit exceeded, please try after some time';
          statusCode = 429;
          break;
        default:
          message = error.message || message;
          statusCode = error.statusCode || statusCode;
      }
    }
  
    return { message, statusCode };
  };
  