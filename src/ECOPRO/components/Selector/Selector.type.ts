
// Определяем тип элемента в массиве items
interface SelectorItem {
  value: string; // Значение, которое будет отправлено при выборе
  displayValue: string; // Значение, отображаемое для пользователя
}

// Определяем типы для пропсов компонента Selector
export interface SelectorProps {
  items: SelectorItem[]; // Массив элементов для выбора
  selectedItem?: SelectorItem; // Выбранный элемент (по умолчанию будет пустым)
  className?: string; // Необязательное свойство для пользовательского стиля
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Обработчик изменения выбранного элемента
}