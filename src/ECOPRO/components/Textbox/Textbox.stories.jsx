import Textbox from "./Textbox";

// Определяем метаданные для Storybook
export default {
  title: "ECOPRO/Textbox",
  component: Textbox,
};

// Шаблон для историй
const Template = (args) => <Textbox {...args} />;

// Основная история для Textbox
export const Default = Template.bind({});
Default.args = {

  value: "",
  defaultValue: "",
  type: "text",
  list: undefined,
  min: undefined,
  disabled: false,
  onChange: (e) => console.log(e.target.value),
  onBlur: (e) => console.log("Blurred", e.target.value),
};

// История для состояния с минимальным значением
export const NumberInput = Template.bind({});
NumberInput.args = {

  value: 10,
  type: "number",
  min: 0,
  onChange: (e) => console.log(e.target.value),
};

// История для отключенного состояния
export const Disabled = Template.bind({});
Disabled.args = {

  value: "Disabled",
  type: "text",
  disabled: true,
};
