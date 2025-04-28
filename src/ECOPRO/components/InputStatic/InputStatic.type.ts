import { JSX } from "react";

export interface InputStaticProps {
    autoComplete?: "on" | "off"; // Опция автозаполнения (включено/выключено)
    className?: string;           // Дополнительные CSS-классы
    disabled?: boolean;           // Блокировка поля ввода
    error?: string;               // Сообщение об ошибке
    glyph?: () => JSX.Element | null; // Значок, который можно отобразить (функция возвращает элемент)
    isRequired?: boolean;         // Обязательное поле или нет
    label?: string;               // Метка для поля ввода
    name?: string;                // Имя поля ввода
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Функция, вызываемая при изменении поля
    onGlyphClick?: () => void;    // Функция, вызываемая при клике на значок
    placeholder?: string;         // Текст-подсказка
    type?: string;                // Тип поля ввода (например, text, email, password и т.д.)
    value?: string;               // Значение поля ввода
  }