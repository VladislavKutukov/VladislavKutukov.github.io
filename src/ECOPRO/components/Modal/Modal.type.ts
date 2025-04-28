// Types/UiKit/Modal.type.ts

import React, { Ref } from "react";

export interface ModalProps {
  className?: string;         // Дополнительный класс для стилизации
  children?: React.ReactNode; // Дочерние элементы, которые будут отображены внутри модала
  onModalClose: () => void;   // Обработчик события закрытия модала
}

export type ModalAreaRef = Ref<HTMLDivElement>; // Ссылка на элемент, куда будет монтироваться модал

export interface ModalContextValue {
  onClose: () => void; // Функция для закрытия модала
}

export interface ModalWindowProps {
    className?: string;         // Дополнительный класс для стилизации
    children?: React.ReactNode; // Дочерние элементы, которые будут отображены внутри модального окна
    isHidden?: boolean;         // Определяет, скрыто ли модальное окно
  }