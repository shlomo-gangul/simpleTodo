import React, { useState } from 'react';
import { TodoItem as ITodoItem } from '../../interfaces/todoItem';
import Button from '../Button/Button';
import s from './TodoItem.scss';

const TodoItem: ITodoItem = ({ item, done, redo, onDelete }) => {
  const onDoneClick = () => {
    done(item.id);
  };
  const onRedoClick = () => {
    redo(item.id);
  };
  const onDeleteClick = () => {
    onDelete(item.id);
  };
  return (
    <li className={item.status ? s.listitem : s.doneListitem}>
      <p className={item.status ? '' : s.doneFont}>{item.content}</p>
      {item.status ? (
        <Button onClick={onDoneClick} text="done" />
      ) : (
        <div className={s.buttonsDiv}>
          <Button onClick={onRedoClick} text="Redo" />
          <Button onClick={onDeleteClick} text="Delete" />
        </div>
      )}
    </li>
  );
};

export default TodoItem;
