// eslint-disable-next-line import/prefer-default-export
export const isValidEmail = (email: string): boolean => /^\S+@\S+\.\S+$/.test(email);
