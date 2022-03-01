import React, { FC } from 'react';
import { Item } from './item';

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export type Input = FC<Props>;
