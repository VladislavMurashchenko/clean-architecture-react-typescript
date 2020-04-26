import authApi from './authApi';
import { AuthData } from './types';

type AuthService = {
  isAuthorized: () => boolean;
  signIn: (authData: AuthData) => Promise<void>;
  signOut: () => void;
  getAuthToken: () => string;
};

const createAuthService = (api: typeof authApi): AuthService => {
  /* It is not correct, because you should store token in localStorage in real app
   * But it works this way in original version
   */
  let token = '';

  return {
    signIn: async (authData: AuthData): Promise<void> => {
      const res = await api.signIn(authData);

      token = res.authorizationToken;
    },
    signOut: (): void => {
      token = '';
    },
    isAuthorized: (): boolean => !!token,
    getAuthToken: (): string => {
      if (!token) {
        throw new Error('User is not authorized');
      }

      return token;
    },
  };
};

export default createAuthService(authApi);
