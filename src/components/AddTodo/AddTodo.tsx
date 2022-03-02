import React, { useState, FC } from 'react';
import s from './add-todo.scss';
import Input from '../TextInput/TextInput';
import Button from '../Button/Button';
import { AddTodo as IAddTodo } from '../../interfaces/addTodo';

const AddTodo: IAddTodo = ({ addItem }) => {
  const [value, setValue] = useState('');

  const onAddTodoClick = () => {
    addItem(value);
    setValue('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className={s.addTodo}>
      <Input value={value} onChange={onChange} />
      <Button className={s.button} onClick={onAddTodoClick} text="Add" />
    </div>
  );
};

export default AddTodo;
