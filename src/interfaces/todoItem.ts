import React, { FC } from 'react';
import { Item } from './item';

interface Props {
  item: Item;
  done: (e: any) => void;
  redo: (e: any) => void;
  onDelete: (e: any) => void;
}
export type TodoItem = FC<Props>;
