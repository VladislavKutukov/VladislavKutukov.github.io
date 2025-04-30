import InputPassword from "./InputPassword";

export default {
  title: "ECOPRO/Строка для ввода пароля",
  component: InputPassword,
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
      description: "Блокировка поля ввода",
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
      description: "Метка поля",
      defaultValue: "Пароль",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    name: {
      description: "Имя поля",
      defaultValue: "inputName",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "inputName" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "Обработчик изменения",
      defaultValue: null,
      table: {
        type: { summary: "function" },
        defaultValue: { summary: null },
      },
    },
    placeholder: {
      description: "Подсказка в поле",
      defaultValue: "Введите пароль",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
    value: {
      description: "Значение поля",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: { type: "text" },
    },
  },
};

const Template = (args) => <InputPassword {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = {
  label: "Введите пароль",
};

export const Большой = Template.bind({});
Большой.args = {
  label: "Введите пароль",
  className: "size--large",
};

export const Маленький = Template.bind({});
Маленький.args = { label: "Введите пароль", className: "size--small" };

export const БезМетки = Template.bind({});
БезМетки.args = {
  label: "",
};

export const Обязательный = Template.bind({});
Обязательный.args = { label: "Введите пароль", isRequired: true };

export const Неактивный = Template.bind({});
Неактивный.args = { label: "Введите пароль", disabled: true };

export const СОшибкой = Template.bind({});
СОшибкой.args = { label: "Введите пароль", error: "Ошибка" };