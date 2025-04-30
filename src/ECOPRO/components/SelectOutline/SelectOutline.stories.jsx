import SelectOutline from "./SelectOutline";

const data = [
  {
    value: 1,
    displayValue: "Item1",
  },
  {
    value: 2,
    displayValue: "Item2",
  },
  {
    value: 3,
    displayValue: "Item3",
  },
  {
    value: 4,
    displayValue: "Item4",
  },
  {
    value: 5,
    displayValue: "Item5",
  },
  {
    value: 6,
    displayValue: "Item6",
  },
  {
    value: 7,
    displayValue: "Item7",
  },
];

export default {
  title: "ECOPRO/Выпадающий список",
  component: SelectOutline,
  argTypes: {
    className: {
      description: "Дополнительные классы для стилизации",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    disabled: {
      description: "Отключенное состояние",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Текст ошибки",
      defaultValue: "",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    isLoading: {
      description: "Состояние загрузки",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    isRequired: {
      description: "Обязательное поле",
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    label: {
      description: "Текст подписи",
      defaultValue: "Подпись",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    handleSelect: {
      description: "Обработчик выбора",
      defaultValue: () => { },
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    options: {
      description: "Список вариантов",
      defaultValue: data.slice(0, 3),
      table: {
        type: { summary: "array" },
        defaultValue: { summary: null },
      },
    },
    selectedOption: {
      name: "selectedOption",
      description: "Выбранный вариант",
      defaultValue: null,
      table: {
        type: { summary: "object" },
        defaultValue: { summary: null },
      },
    },
    placeholder: {
      description: "Текст плейсхолдера",
      defaultValue: "Выберите...",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
  },
};

const Template = (args) => <SelectOutline {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = { options: data, handleSelect: () => { } };

export const Компактный = Template.bind({});
Компактный.args = {
  options: data,
  className: "size--small",
  handleSelect: () => { },
};

export const Большой = Template.bind({});
Большой.args = {
  options: data,
  className: "size--large",
  handleSelect: () => { },
};

export const СВыбранным = Template.bind({});
СВыбранным.args = {
  options: data,
  selectedOption: {
    value: 1,
    displayValue: "Элемент1",
  },
  handleSelect: () => { },
};

export const Обязательный = Template.bind({});
Обязательный.args = {
  options: data,
  isRequired: true,
  label: "Поле",
  handleSelect: () => { },
};

export const Неактивный = Template.bind({});
Неактивный.args = {
  options: data,
  selectedOption: {
    value: 1,
    displayValue: "Элемент1",
  },
  disabled: true,
  handleSelect: () => { },
};

export const БезПодписи = Template.bind({});
БезПодписи.args = { options: data, label: "", handleSelect: () => { } };

export const Загрузка = Template.bind({});
Загрузка.args = {
  isLoading: true,
  options: data,
  handleSelect: () => { },
};

export const СОшибкой = Template.bind({});
СОшибкой.args = {
  options: data,
  error: "Обязательное поле",
  handleSelect: () => { },
};