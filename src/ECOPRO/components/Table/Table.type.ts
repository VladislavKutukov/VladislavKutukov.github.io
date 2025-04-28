import { JSX } from "react";

export type GlyphOrderClasses = {
    [key: string]: string; // ключ может быть "+" или "-" или любым другим значением, а значение - это класс для CSS
  };
  
  export interface TableHeadCellProps {
    caption?: string; // Заголовок ячейки, необязательное поле
    className?: string; // Дополнительные классы CSS, необязательное поле
    orderDirection?: "+" | "-"; // Направление сортировки ("+" для возрастающей, "-" для убывающей), необязательное поле
    isFilter?: boolean; // Определяет, будет ли отображаться кнопка фильтрации
    isOrder?: boolean; // Определяет, будет ли возможна сортировка
    cellTagName?: keyof JSX.IntrinsicElements; // HTML тег для ячейки таблицы (например, th или td), по умолчанию th
    onOrder?: () => void; // Функция обратного вызова для обработки клика по кнопке сортировки
  }

  export interface TableCellProps {
    value?: string | number; // Значение, отображаемое в ячейке. Может быть строкой или числом, необязательное поле
    rowValues?: Record<string, any>; // Объект, содержащий все значения строки. Необязательное поле
    className?: string; // Дополнительные классы CSS для ячейки таблицы, необязательное поле
    renderFn?: (displayValue: string | number, rowValues?: Record<string, any>) => React.ReactNode; // Функция для рендеринга значения ячейки
  }

  export interface TableHeaderItem {
    name: string; // Уникальное название столбца
    displayName: string; // Отображаемое имя столбца
    isFilter?: boolean; // Определяет, будет ли фильтрация для этого столбца
    isOrder?: boolean; // Определяет, будет ли сортировка для этого столбца
    isHidden?: boolean; // Определяет, скрыт ли столбец
    className?: string; // Дополнительные классы CSS для заголовка столбца
    cellRenderFn?: (value: any) => React.ReactNode; // Функция для рендеринга значения ячейки
    filterValueTransformFn?: (value: any) => any; // Функция для трансформации значения фильтра
    totalFn?: (values: any[]) => React.ReactNode; // Функция для вычисления итогового значения
  }
  
  export interface TableProps {
    primaryKey: string; // Поле, которое является уникальным ключом строк
    header?: TableHeaderItem[]; // Массив заголовков таблицы
    data?: Map<string, any>[]; // Массив строк таблицы в виде массивов Map
    orderedColumn?: string; // Порядок сортировки, например "+id" или "-id"
    className?: string; // Дополнительные классы CSS для таблицы
    onOrder?: (newOrder: string) => void; // Функция обратного вызова для изменения порядка
    hideHeader?: boolean; // Определяет, нужно ли скрывать заголовок таблицы
  }