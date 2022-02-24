import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoList as ITodoList } from '../../interfaces/todoList';

const TodoList: ITodoList = ({ todoItems, done, redo, onDelete }) => {
  return (
    <ul>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          done={done}
          redo={redo}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
