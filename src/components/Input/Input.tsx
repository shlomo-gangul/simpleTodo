import React from 'react';
import s from './Input.scss';
import { Input } from '../../interfaces/input';

const AddTodoInput: Input = ({ input, setInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, content: e.target.value });
  };
  return (
    <input
      className={s.addTodoinput}
      type="text"
      name="content"
      value={input.content}
      onChange={handleChange}
    />
  );
};

export default AddTodoInput;
