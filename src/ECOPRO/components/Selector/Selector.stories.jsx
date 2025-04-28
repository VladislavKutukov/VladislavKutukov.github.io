import Selector from "./Selector";
// Импортируйте ваши типы

// Определим примерные данные
const items = [
  { value: "1", displayValue: "Первый элемент" },
  { value: "2", displayValue: "Второй элемент" },
  { value: "3", displayValue: "Третий элемент" },
];

// Создаем компонент, который будем экспортировать для Storybook
export default {
  title: "ECOPRO/Selector",
  component: Selector,
};

// Основной шаблон
const Template = (args) => <Selector {...args} />;

// История для стандартного состояния
export const Default = Template.bind({});
Default.args = {
  items,
  selectedItem: null, // Измените на нужный элемент по умолчанию, если необходимо
  onChange: (event) => {
    console.log(event.target.value);
  },
};
