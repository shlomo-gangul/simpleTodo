import { FC } from 'react';

interface Props {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
}
export type Button = FC<Props>;
