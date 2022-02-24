import React, { FC } from 'react';
import { Item } from './item';

interface Props {
  item: Item;
  done: (e: number) => void;
  redo: (e: number) => void;
  onDelete: (e: number) => void;
}
export type TodoItem = FC<Props>;
