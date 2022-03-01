import React from 'react';
import { Button as IButton } from '../../interfaces/button';

const Button: IButton = ({ className, onClick, text }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
