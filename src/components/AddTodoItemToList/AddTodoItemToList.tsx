import React, { useState, FC } from 'react';
import { Item } from '../../interfaces/item';
import s from './AddTodoItemToList.scss';
import Input from '../Input/Input';
import Butoon from '../Button/Button';

interface IProps {
  addTodoItem: Function;
}

const AddTodoItemToList: FC<IProps> = ({ addTodoItem }) => {
  const [addTodoInput, setAddTodoInput] = useState({
    content: '',
    status: true,
    id: Math.random() * 50,
  });

  const onAddTodoClick = () => {
    addTodoItem(addTodoInput);
    setAddTodoInput({ content: '', status: true, id: Math.random() * 50 });
  };

  return (
    <div className={s.addTodoContainer}>
      <Input input={addTodoInput} setInput={setAddTodoInput} />
      <Butoon onClick={onAddTodoClick} text="Add" />
    </div>
  );
};

export default AddTodoItemToList;
