// Types/UiKit.ts

import React from "react";

export interface TopBarProps {
  /** Дополнительные классы для компонента TopBar */
  className?: string;

  /** Дочерние элементы, которые будут выведены в центральной области */
  children?: React.ReactNode;

  /** Функция обратного вызова, вызывается при нажатии на кнопку меню */
  onToggleMenu?: () => void;

  /** Компонент для отображения логотипа */
  LogoComponent?: React.ReactNode;

  /** Функция рендера элементов, которые должны отображаться справа */
  RightSideRenderFn?: () => React.ReactNode;
}