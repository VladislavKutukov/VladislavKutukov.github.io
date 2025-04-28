import { ElementType } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  OPTION = 'option',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum ButtonTruncate {
  BOTTOM_LEFT = 'left',
  BOTTOM_RIGHT = 'right',
  BOTTOM = 'bottom',
}

export type ButtonProps = {
  children: any;
  as?: ElementType;
  className?: string;
  type?: ButtonType;
  truncate?: ButtonTruncate;
  variant?: ButtonVariant;
  block?: boolean;
  disabled?: boolean;
  form?: string;
  isActive?: boolean;
  onClick?: () => void;
};