import { FC } from 'react';
import cn from 'classnames';
import { ButtonProps, ButtonTruncate, ButtonVariant } from './Button.type';

import "./Button.css";

export const Button: FC<ButtonProps> = function ({
  children,
  className,
  block,
  disabled,
  variant,
  truncate,
  form,
  type,
  onClick,
  as: Tag = 'button',
  isActive,
}) {
  return (
    <Tag
      className={cn('button', className, {
        'button-disabled': disabled,
        'button-block': block,
        'button-primary': variant === ButtonVariant.PRIMARY,
        'button-secondary': variant === ButtonVariant.SECONDARY,
        'button-tertiary': variant === ButtonVariant.TERTIARY,
        'button-option': variant === ButtonVariant.OPTION,
        'button-truncate_bottom_left': truncate === ButtonTruncate.BOTTOM_LEFT,
        'button-truncate_bottom_right':
          truncate === ButtonTruncate.BOTTOM_RIGHT,
        'button-truncate_bottom': truncate === ButtonTruncate.BOTTOM,
        'button-active': isActive,
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
      form={form}
    >
      {children}
    </Tag>
  );
};

export default Button;