import * as React from 'react';

interface Props {
  onClick: () => void;
  className?: string;
  text: string;
}

const Button: React.FC<Props> = ({ onClick, className, text }) => {
  return (
    <button type="button" className={`${className} col btn btn-primary`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
