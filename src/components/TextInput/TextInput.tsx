import React from 'react';
import s from './text-input.scss';
import { Input } from '../../interfaces/input';

const TextInput: Input = ({ value, onChange }) => {
  return (
    <input
      className={s.input}
      type="text"
      name="content"
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
