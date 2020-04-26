import { isValidEmail } from '../../utils/validation';

import { AuthData } from './types';

const authValidate = ({ email, password }: AuthData): string => {
  if (!email) {
    return 'Email cannot be empty';
  }

  if (!isValidEmail(email)) {
    return 'Email format is not valid';
  }

  if (!password) {
    return 'Password cannot be empty';
  }

  return '';
};

export default authValidate;
