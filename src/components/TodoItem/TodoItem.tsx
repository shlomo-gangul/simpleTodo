import React from 'react';
import { TodoItem as ITodoItem } from '../../interfaces/todoItem';
import Button from '../Button/Button';
import s from './todo-item.scss';
import { ADDED } from '../../consts';

const TodoItem: ITodoItem = ({ item, onComplete, onRedo, onDelete }) => {
  const onDoneClick = () => onComplete(item.id);

  const onRedoClick = () => onRedo(item.id);

  const onDeleteClick = () => onDelete(item.id);

  // const listClassName = item.status !== COMPLETED ? s.listItem : s.doneListItem;

  const pClassName = item.status === ADDED ? '' : s.doneFont;

  return (
    <li className={s.listItem}>
      <p className={pClassName}>{item.content}</p>
      <div className={s.buttons}>
        {item.status === ADDED ? (
          <Button className={s.doneButton} onClick={onDoneClick} text="Done" />
        ) : (
          <Button className={s.redoButton} onClick={onRedoClick} text="Redo" />
        )}
        <Button
          className={s.deleteButton}
          onClick={onDeleteClick}
          text="Delete"
        />
      </div>
    </li>
  );
};

export default TodoItem;
