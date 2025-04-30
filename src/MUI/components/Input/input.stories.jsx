import Input from "./input";
import Icon from "../Icon/icon";

export default {
  title: "MUI/Строка Ввода",
  component: Input,
  argTypes: {
    input: {
      type: "object",
    },
    label: {
      type: "string",
      description: "Подпись поля",
      control: { type: "text" },
    },
    size: {
      description: "Размер поля",
      options: [undefined, "small"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = {
  input: {
    value: "Тестовый текст",
  },
  label: "Подпись поля",
  meta: {
    touched: false,
  },
};

export const СтандартныйСОшибкой = Template.bind({});
СтандартныйСОшибкой.args = {
  input: {
    value: "Тестовый текст",
  },
  label: "Подпись поля",
  error: true,
  helperText: "Ошибка",
};

export const СтандартныйСДлиннымЗначением = Template.bind({});
СтандартныйСДлиннымЗначением.args = {
  input: {
    value: "Очень длинный текст для проверки отображения в поле ввода при переполнении контентом",
  },
  label: "Подпись поля",
};

export const СтандартныйСДлиннойПодписью = Template.bind({});
СтандартныйСДлиннойПодписью.args = {
  input: {
    value: "Текст",
  },
  label: "Очень длинная подпись поля для проверки отображения при переполнении контентом",
};

export const СтандартныйСИконкойСлева = Template.bind({});
СтандартныйСИконкойСлева.args = {
  input: {
    value: "Текст с иконкой",
  },
  label: "Подпись поля",
  InputProps: {
    startAdornment: <Icon name="search" />,
  },
};

export const СтандартныйСИконкойСправа = Template.bind({});
СтандартныйСИконкойСправа.args = {
  input: {
    value: "Текст с иконкой",
  },
  label: "Подпись поля",
  InputProps: {
    endAdornment: <Icon name="search" />,
  },
};

export const СтандартныйБезАвтоУменьшения = Template.bind({});
СтандартныйБезАвтоУменьшения.args = {
  input: {
    value: "",
  },
  label: "Подпись поля",
  InputLabelProps: {
    shrink: false,
  },
};

export const Маленький = Template.bind({});
Маленький.args = {
  input: {
    value: "Тестовый текст",
  },
  label: "Подпись поля",
  size: "small",
};

export const МаленькийСОшибкой = Template.bind({});
МаленькийСОшибкой.args = {
  input: {
    value: "Тестовый текст",
  },
  label: "Подпись поля",
  size: "small",
  error: true,
  helperText: "Ошибка",
};

export const МаленькийСДлиннымЗначением = Template.bind({});
МаленькийСДлиннымЗначением.args = {
  input: {
    value: "Очень длинный текст для маленького поля ввода",
  },
  label: "Подпись поля",
  size: "small",
};

export const МаленькийСДлиннойПодписью = Template.bind({});
МаленькийСДлиннойПодписью.args = {
  input: {
    value: "Текст",
  },
  label: "Очень длинная подпись для маленького поля",
  size: "small",
};

export const МаленькийСИконкойСлева = Template.bind({});
МаленькийСИконкойСлева.args = {
  input: {
    value: "Текст с иконкой",
  },
  label: "Подпись поля",
  InputProps: {
    startAdornment: <Icon name="search" />,
  },
  size: "small",
};

export const МаленькийСИконкойСправа = Template.bind({});
МаленькийСИконкойСправа.args = {
  input: {
    value: "Текст с иконкой",
  },
  label: "Подпись поля",
  InputProps: {
    endAdornment: <Icon name="search" />,
  },
  size: "small",
};

export const МаленькийБезАвтоУменьшения = Template.bind({});
МаленькийБезАвтоУменьшения.args = {
  input: {
    value: "",
  },
  label: "Подпись поля",
  InputLabelProps: {
    shrink: false,
  },
  size: "small",
};

export const МаленькийБезАвтоУменьшенияСИконкой = Template.bind({});
МаленькийБезАвтоУменьшенияСИконкой.args = {
  input: {
    value: "",
  },
  label: "Подпись поля",
  InputProps: {
    startAdornment: <Icon name="search" />,
  },
  size: "small",
};