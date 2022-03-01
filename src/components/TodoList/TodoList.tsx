import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoList as ITodoList } from '../../interfaces/todoList';
import s from './TodoList.scss';
import { DELETED } from '../../consts';

const TodoList: ITodoList = ({ items, onDone, onRedo, onDelete }) => {
  return (
    <ul className={s.list}>
      {items.map(
        (item, index) =>
          item.status !== DELETED && (
            <TodoItem
              key={index}
              item={item}
              onDone={onDone}
              onRedo={onRedo}
              onDelete={onDelete}
            />
          )
      )}
    </ul>
  );
};

export default TodoList;
