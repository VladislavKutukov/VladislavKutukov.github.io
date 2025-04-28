
export interface ButtonWithIconProps {
    className?: string;              // Дополнительные классы для кнопки
    primary?: boolean;                // Определяет, является ли кнопка первичной
    glyphNameLeft?: string;           // Имя иконки слева
    glyphNameRight?: string;          // Имя иконки справа
    children?: React.ReactNode;       // Дочерние элементы кнопки (текст или другие элементы)
    onClick?: () => void;             // Обработчик события клика
  }