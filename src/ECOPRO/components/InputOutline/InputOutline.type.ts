
// Определим типы для пропсов компонента InputOutline
export interface InputOutlineProps {
  autoComplete?: string; // Необязательное свойство для управления автозаполнением
  className?: string; // Необязательное свойство для пользовательских классов CSS
  disabled?: boolean; // Указывает, отключён ли ввод
  error?: string; // Сообщение об ошибке проверки
  glyph?: () => React.ReactNode; // Необязательная функция для отображения иконки
  isRequired?: boolean; // Указывает, является ли поле обязательным
  label?: string; // Метка, ассоциированная с полем ввода
  name: string; // Имя поля ввода (обязательно)
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменения значения
  onGlyphClick?: () => void; // Необязательная функция для обработки клика по иконке
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // Необязательная функция для обработки потери фокуса
  type?: string; // Тип поля ввода (по умолчанию: "text")
  value: string; // Текущее значение поля (обязательно)
}