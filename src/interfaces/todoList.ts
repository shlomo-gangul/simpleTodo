import { FC } from 'react';
import { Item } from './item';

interface Props {
  todoItems: Item[];
  onDone: (e: number) => void;
  onRedo: (e: number) => void;
  onDelete: (e: number) => void;
}

export type TodoList = FC<Props>;
