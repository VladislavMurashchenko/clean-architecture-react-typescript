import React from 'react';

interface Props {
  className?: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ type, placeholder, onChange, value, className }) => {
  return (
    <input
      className={`${className} form-control`}
      type={type}
      value={value}
      onChange={(e: React.FormEvent<HTMLInputElement>): void => {
        onChange(e.currentTarget.value);
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
