import React, { useState, FC } from 'react';
import s from './AddTodo.scss';
import Input from '../TextInput/TextInput';
import Button from '../Button/Button';

interface IProps {
  addItem: (value: string) => void;
}

const AddTodo: FC<IProps> = ({ addItem }) => {
  const [value, setValue] = useState('');

  const onAddTodoClick = () => {
    addItem(value);
    setValue('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className={s.onAddTodoContainer}>
      <Input value={value} onChange={onChange} />
      <Button className={s.button} onClick={onAddTodoClick} text="Add" />
    </div>
  );
};

export default AddTodo;
