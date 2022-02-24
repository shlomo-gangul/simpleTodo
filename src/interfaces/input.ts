import React, { FC } from 'react';
import { Item } from './item';

interface Props {
  input: Item;
  setInput: React.Dispatch<React.SetStateAction<Item>>;
}

export type Input = FC<Props>;
