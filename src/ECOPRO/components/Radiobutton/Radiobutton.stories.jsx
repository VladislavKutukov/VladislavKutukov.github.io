import Radiobutton from "./Radiobutton";

export default {
  title: "ECOPRO/Радиокнопка",
  component: Radiobutton,
  argTypes: {
    className: {
      description: "Имя класса для дополнительных стилей",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    disabled: {
      description: "Блокировка элемента",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    name: {
      description: "Имя группы радиокнопок",
      defaultValue: "inputName",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "inputName" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "Обработчик изменения состояния",
      defaultValue: null,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    checked: {
      description: "Состояние выбора",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    label: {
      description: "Текст метки",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Radiobutton {...args} />;

export const Стандартная = Template.bind({});

export const ВыбраннаяСМеткой = Template.bind({});
ВыбраннаяСМеткой.args = {
  checked: true,
  name: "input1",
  label: "Включить",
};

export const Отключенная = Template.bind({});
Отключенная.args = {
  disabled: true,
  name: "input2",
};

export const ОтключеннаяИВыбранная = Template.bind({});
ОтключеннаяИВыбранная.args = {
  disabled: true,
  checked: true,
  name: "input3",
  label: "Включить",
};