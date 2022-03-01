import { FC } from 'react';
import { Item } from './item';

interface Props {
  items: Item[];
  onDone: (id: number) => void;
  onRedo: (id: number) => void;
  onDelete: (id: number) => void;
}

export type TodoList = FC<Props>;
