import { FC } from 'react';

interface Props {
  onClick: () => void;
  text: String;
}
export type Button = FC<Props>;
