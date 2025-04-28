export interface TextMarkerProps {
    checked?: boolean; // Указывает, отмечен ли элемент
    className?: string; // Дополнительный класс для стилизации
    caption?: string; // Заголовок или текст для отображения
  }
  export interface TextRadioGroupItem {
    value: string; // Значение элемента
    label: string; // Текст метки, который будет отображаться
  }
  
  export interface TextRadioGroupProps {
    className?: string; // Дополнительный класс для стилизации
    selectedItem?: TextRadioGroupItem; // Текущий выбранный элемент
    items: TextRadioGroupItem[]; // Массив элементов радио группы
    groupName: string; // Имя группы для связывания переключателей
    onSelect: (item: TextRadioGroupItem) => void; // Функция обратного вызова для обработки выбора
  }