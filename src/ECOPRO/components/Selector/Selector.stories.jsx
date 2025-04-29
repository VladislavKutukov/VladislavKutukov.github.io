import Selector from "./Selector";
// Импортируйте ваши типы

// Определим примерные данные
const items = [
  { value: "1", displayValue: "СМ" },
  { value: "2", displayValue: "JR-90B" },
  { value: "3", displayValue: "JR-S301" },
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
