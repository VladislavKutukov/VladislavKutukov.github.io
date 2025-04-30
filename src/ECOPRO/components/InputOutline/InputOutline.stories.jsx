import InputOutline from "./InputOutline";

export default {
  title: "ECOPRO/Строка Ввода",
  component: InputOutline,
  argTypes: {
    autoComplete: {
      description: "Автозаполнение (история)",
      options: ["on", "off"],
      defaultValue: "on",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "on" },
      },
      control: { type: "inline-radio" },
    },
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
      description: "Блокировка инпута.",
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
    glyph: {
      description: "Глиф (React компонент)",
      defaultValue: null,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    isRequired: {
      description: 'Флаг "обязательное поле"',
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    label: {
      description: "Лейбл",
      defaultValue: "Label",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
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
      description: "Контроллер инпута",
      defaultValue: null,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    onGlyphClick: {
      description: "Обработчик нажатий на глиф",
      defaultValue: null,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    placeholder: {
      description: "Плейсхолдер",
      defaultValue: "Placeholder",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    type: {
      description: "Тип инпута",
      defaultValue: "text",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
      control: { type: "text" },
    },
    value: {
      description: "Значение инпута",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
  },
};

const Template = (args) => <InputOutline {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = {
  label: "Станция ГНСС",
};

export const Большой = Template.bind({});
Большой.args = { label: "Станция ГНСС", className: "size--large" };

export const Маленький = Template.bind({});
Маленький.args = { label: "Станция ГНСС", className: "size--small" };

export const Обязательный = Template.bind({});
Обязательный.args = { label: "Станция ГНСС", isRequired: true };

export const Неактивный = Template.bind({});
Неактивный.args = {
  disabled: true,
  label: "Станция ГНСС",
  value: "Введите название станции",
};

export const Числовой = Template.bind({});
Числовой.args = {
  value: 10,
  type: "number",
  min: 0,
  onChange: (e) => console.log(e.target.value),
};

export const СОшибкой = Template.bind({});
СОшибкой.args = { label: "Станция ГНСС", error: "Ошибка" };