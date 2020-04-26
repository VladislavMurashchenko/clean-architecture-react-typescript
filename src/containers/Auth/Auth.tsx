import * as React from 'react';
import './Auth.css';
import { useState } from 'react';
import { authService, AuthData, authValidate } from '../../services/auth';

import useFieldChange from '../../hooks/useFieldChange';

import Input from '../../components/Input';
import Button from '../../components/Button';

const initialAuthData: AuthData = {
  email: '',
  password: '',
};

const Auth: React.FC = () => {
  const [isAuthorized, setIsAuthorized] = useState(authService.isAuthorized());
  const [error, setError] = useState('');
  const [authData, setAuthData] = useState(initialAuthData);

  const handleChange = useFieldChange(setAuthData);

  const handleSignIn = async (): Promise<void> => {
    const validationError = authValidate(authData);
    setError(validationError);

    if (validationError) {
      return;
    }

    try {
      await authService.signIn(authData);
      setIsAuthorized(authService.isAuthorized());
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSignOut = (): void => {
    authService.signOut();
    setIsAuthorized(authService.isAuthorized());
  };

  return (
    <div className="row flex-grow-1 d-flex justify-content-center align-items-center">
      <div className="auth-container col bg-white border rounded-lg py-4 px-5">
        <div className="row mt-2 mb-4">
          Status:&nbsp;
          <span className={`${isAuthorized ? 'text-success' : 'text-danger'}`}>
            {isAuthorized ? 'authorized' : 'is not autorized'}
          </span>
        </div>

        <div className="row mt-2">
          <Input
            type="text"
            placeholder="user@email.com"
            onChange={handleChange('email')}
            value={authData.email}
          />
        </div>
        <div className="row mt-2">
          <Input
            type="password"
            placeholder="password"
            onChange={handleChange('password')}
            value={authData.password}
          />
        </div>

        {error && <div className="row my-3 text-danger justify-content-center">{error}</div>}

        <div className="row mt-4">
          {!isAuthorized && <Button text="Sign in" onClick={handleSignIn} />}
          {isAuthorized && <Button text="Sign out" onClick={handleSignOut} />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
