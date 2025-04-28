// Types/UiKit.ts

export interface SelectItem {
    value: string | null; // Значение элемента, может быть null
    displayValue: string; // Текст для отображения
  }
  
  export interface SelectOutlineProps {
    className?: string; // Дополнительные классы CSS
    disabled?: boolean; // Указывает, заблокирован ли элемент
    error?: string; // Сообщение об ошибке
    options: SelectItem[]; // Список вариантов выбора
    selectedOption?: SelectItem | null; // Выбранный элемент
    handleSelect: (option: SelectItem) => void; // Функция для обработки выбора
    isLoading?: boolean; // Указывает, загружается ли состояние
    isRequired?: boolean; // Указывает, обязательное ли это поле
    label?: string; // Метка для элемента выбора
  }