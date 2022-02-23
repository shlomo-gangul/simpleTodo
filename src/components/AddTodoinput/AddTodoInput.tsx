import React, { useState, FC } from 'react';
import { Item } from '../../interfaces/item';
import s from './AddTodoInput.scss';

interface IProps {
  addTodoInput: Item;
  setAddTodoInput: React.Dispatch<React.SetStateAction<Item>>;
}

const AddTodoInput: FC<IProps> = ({ addTodoInput, setAddTodoInput }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddTodoInput({ ...addTodoInput, content: e.target.value });
  };
  return (
    <input
      className={s.addTodoinput}
      type="text"
      name="listItem"
      value={addTodoInput.content}
      onChange={handleChange}
    />
  );
};

export default AddTodoInput;
