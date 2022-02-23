import React, { FC } from 'react';
import s from './Button.scss';
import { Button as IButton } from '../../interfaces/button';

const Button: IButton = ({ onClick, text }) => {
  return (
    <button className={s.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
