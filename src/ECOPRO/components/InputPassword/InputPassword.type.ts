

// Определим типы для пропсов компонента InputPassword
export interface InputPasswordProps {
  className?: string; // Необязательное свойство для стилизации
  disabled?: boolean; // Указывает, отключён ли ввод
  error?: string; // Указывает, есть ли ошибка
  isRequired?: boolean; // Указывает, является ли поле обязательным
  label?: string; // Метка, ассоциированная с полем ввода
  name: string; // Имя поля ввода (обязательно)
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Обработчик изменения значения
  placeholder?: string; // Вспомогательная подсказка для поля ввода
  value: string; // Текущие значение поля (обязательно)
}