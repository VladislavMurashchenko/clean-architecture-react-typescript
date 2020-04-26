import { AuthData } from './types';

const validateCredentials = ({ password }: AuthData): Promise<ValidationResult> => {
  // Here is api mock, but should be fetch or axios call in real app
  return new Promise((resolve, reject) => {
    if (password.length < 5) {
      reject(new Error('Password length should be more than 5 characters'));
      return;
    }

    resolve({
      validationKey: 'A34dZ7',
    });
  });
};

const getToken = ({
  email,
  password,
  validationKey,
}: AuthData & ValidationResult): Promise<AuthorizationResult> => {
  // Here is api mock, but should be fetch or axios call in real app
  return new Promise((resolve, reject) => {
    if (validationKey === 'A34dZ7') {
      if (email === 'user@email.com' && password === 'password') {
        resolve({
          authorizationToken: 'Bearer ASKJdsfjdijosd93wiesf93isef',
        });
      }
    } else {
      reject(new Error('Validation key is not correct. Please try later'));
      return;
    }

    reject(new Error('Email or password is not correct'));
  });
};

const signIn = async (authData: AuthData): Promise<AuthorizationResult> => {
  const validationResult = await validateCredentials(authData);

  return getToken({
    ...authData,
    ...validationResult,
  });
};

export default {
  signIn,
};

type ValidationResult = {
  validationKey: string;
};

type AuthorizationResult = {
  authorizationToken: string;
};
