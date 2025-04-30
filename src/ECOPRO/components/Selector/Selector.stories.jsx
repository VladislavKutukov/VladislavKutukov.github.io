import Selector from "./Selector";

const items = [
  { value: "1", displayValue: "СМ" },
  { value: "2", displayValue: "JR-90B" },
  { value: "3", displayValue: "JR-S301" },
];

export default {
  title: "ECOPRO/Селектор",
  component: Selector,
};

const Template = (args) => <Selector {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = {
  items,
  selectedItem: null,
  onChange: (event) => {
    console.log(event.target.value);
  },
};