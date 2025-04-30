import Switcher from "./Switcher";

export default {
  title: "ECOPRO/Переключатели",
  component: Switcher,
  argTypes: {
    className: {
      description: "Имя класса. Для задания дополнительных стилей",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    disabled: {
      description: "Блокировка свитчера",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    name: {
      description: "Имя",
      defaultValue: "inputName",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "inputName" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "Обработка события клика",
      defaultValue: null,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    checked: {
      description: "Состояние свитчера",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
  },
};

const Template = (args) => <Switcher {...args} />;

export const Обычный = Template.bind({});

export const Переключенный = Template.bind({});
Переключенный.args = {
  checked: true,
  name: "input1",
};

export const Недоступный = Template.bind({});
Недоступный.args = {
  disabled: true,
  name: "input2",
};

export const НедоступныйИПереключенный = Template.bind({});
НедоступныйИПереключенный.args = {
  disabled: true,
  checked: true,
  name: "input3",
};
