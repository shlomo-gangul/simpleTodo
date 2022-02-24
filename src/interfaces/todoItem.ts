import React, { FC } from 'react';
import { Item } from './item';

interface Props {
  item: Item;
  onDone: (e: number) => void;
  onRedo: (e: number) => void;
  onDelete: (e: number) => void;
}
export type TodoItem = FC<Props>;
