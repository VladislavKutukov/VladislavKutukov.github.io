export interface SwitcherProps {
    className?: string; // Дополнительный класс для стилизации
    disabled?: boolean; // Указывает, отключен ли переключатель
    checked?: boolean; // Указывает, выбрано ли состояние переключателя
    name?: string; // Имя переключателя (если нужно для группы)
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменения состояния
  }