export interface RadiobuttonProps {
    className?: string; // Дополнительный класс для стилизации
    disabled?: boolean; // Указывает, отключен ли радиокнопка
    checked?: boolean; // Указывает, выбрана ли радиокнопка
    name: string; // Название группы радиокнопок
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменения
    label?: string; // Текст метки для радиокнопки
  }