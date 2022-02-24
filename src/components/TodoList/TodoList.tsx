import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoList as ITodoList } from '../../interfaces/todoList';
import s from './TodoList.scss';

const TodoList: ITodoList = ({ todoItems, onDone, onRedo, onDelete }) => {
  return (
    <ul className={s.todoList}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onDone={onDone}
          onRedo={onRedo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
