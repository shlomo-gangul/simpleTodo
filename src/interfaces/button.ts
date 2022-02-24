import { FC } from 'react';

interface Props {
  onClick: (e: any) => void;
  text: String;
}
export type Button = FC<Props>;
