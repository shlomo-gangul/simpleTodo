import React from 'react';
import { TodoItem as ITodoItem } from '../../interfaces/todoItem';
import Button from '../Button/Button';
import s from './TodoItem.scss';
import { ADDED, COMPLETED } from '../../consts';

const TodoItem: ITodoItem = ({ item, onDone, onRedo, onDelete }) => {
  const onDoneClick = () => onDone(item.id);

  const onRedoClick = () => onRedo(item.id);

  const onDeleteClick = () => onDelete(item.id);

  const listClassName = item.status !== COMPLETED ? s.listItem : s.doneListItem;

  const pClassName = item.status === ADDED ? '' : s.doneFont;

  return (
    <li className={listClassName}>
      <p className={pClassName}>{item.content}</p>
      <div className={s.buttons}>
        {item.status === ADDED ? (
          <Button onClick={onDoneClick} text="Done" />
        ) : (
          <Button onClick={onRedoClick} text="Redo" />
        )}
        <Button onClick={onDeleteClick} text="Delete" />
      </div>
    </li>
  );
};

export default TodoItem;
