import { ReactNode } from 'react';

export enum CircularProgressbarWithSummaryColor {
  BACKGROUND = '#535353',
  MIN = '#c33',
  MAX = '#1f991f',
}

export type CircularProgressbarWithSummaryProps = {
  className?: string;
  percentage: number;
  from: ReactNode;
  to: ReactNode;
  summary: ReactNode;
  description: ReactNode;
};
