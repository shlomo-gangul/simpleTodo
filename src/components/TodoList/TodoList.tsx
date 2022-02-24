import React, { useState, FC } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Item } from '../../interfaces/item';

interface IProps {
  todoItems: Item[];
  done: (e: any) => void;
  redo: (e: any) => void;
  onDelete: (e: any) => void;
}
const TodoList: FC<IProps> = ({ todoItems, done, redo, onDelete }) => {
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
