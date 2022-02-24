import { FC } from 'react';

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: String;
}
export type Button = FC<Props>;
