import Checkbox from "./Checkbox";

export default {
  title: "ECOPRO/Флажки",
  component: Checkbox,
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
      description: "Блокировка инпута",
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
      description: "Состояние инпута",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    label: {
      description: "Подпись к инпуту",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    markType: {
      description: "Тип маркера для чекбокса",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const ПоУмолчанию = Template.bind({});

export const СМеткой = Template.bind({});
СМеткой.args = {
  checked: true,
  name: "input1",
  label: "Обновить",
};

export const СЛинией = Template.bind({});
СЛинией.args = {
  checked: true,
  name: "input2",
  label: "Обновить",
  markType: "line",
};

export const Отключенный = Template.bind({});
Отключенный.args = {
  disabled: true,
  name: "input3",
};

export const ОтключенныйСМеткой = Template.bind({});
ОтключенныйСМеткой.args = {
  disabled: true,
  checked: true,
  name: "input4",
  label: "Обновить",
};