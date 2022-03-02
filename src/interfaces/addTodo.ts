import { FC } from 'react';

interface Props {
  addItem: (value: string) => void;
}
export type AddTodo = FC<Props>;
