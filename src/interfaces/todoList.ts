import { FC } from 'react';
import { Item } from './item';

interface Props {
  todoItems: Item[];
  done: (e: number) => void;
  redo: (e: number) => void;
  onDelete: (e: number) => void;
}

export type TodoList = FC<Props>;
