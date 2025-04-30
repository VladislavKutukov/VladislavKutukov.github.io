import * as React from "react";
import { Field, Form } from "react-final-form";
import Select from "./select";
import Icon from "../Icon/icon";

export default {
  title: "MUI/Выпадающий список",
  component: Select,
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
      options: [undefined, "small", "medium"],
      control: { type: "radio" },
    },
    multiple: {
      type: "boolean",
      description: "Множественный выбор",
      options: [true, false],
      control: { type: "radio" },
    },
    options: {
      type: "array",
      description: "Доступные варианты",
    },
    placeholder: {
      type: "string",
      description: "Подсказка в поле",
      control: { type: "text" },
    },
    fullWidth: {
      type: "boolean",
      description: "На всю ширину",
      options: [true, false],
      control: { type: "radio" },
    },
    required: {
      type: "boolean",
      description: "Обязательное поле",
      options: [true, false],
      control: { type: "radio" },
    },
    icon: {
      type: "ReactNode",
      description: "Иконка",
    },
  },
};

const exampleOptions = [
  {
    label: "Вариант 1",
    id: "1",
  },
  {
    label: "Вариант 2",
    id: "2",
  },
  {
    label: "Вариант 3",
    id: "3",
  },
  {
    label: "Вариант 4",
    id: "4",
  },
  {
    label: "Вариант 5",
    id: "5",
  },
  {
    label: "Вариант 6",
    id: "6",
  },
];

const CustomForm = (props) => {
  return (
    <Form initialValues={{}} onSubmit={() => { }}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="select">
            {({ input, meta }) => (
              <Select
                {...props}
                input={input}
                meta={meta}
                options={exampleOptions}
              />
            )}
          </Field>
        </form>
      )}
    </Form>
  );
};

const Template = (args) => <CustomForm {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = {
  label: "Выберите значение",
};

export const СОшибкой = Template.bind({});
СОшибкой.args = {
  label: "Выберите значение",
  meta: {
    touched: true,
    invalid: true,
    error: "Ошибка выбора",
  },
};

export const СДлиннымЗначением = Template.bind({});
СДлиннымЗначением.args = {
  input: {
    value: {
      id: 1,
      label: "Очень длинное значение для проверки отображения в выпадающем списке",
    },
    onChange: () => { },
  },
  label: "Выберите значение",
};

export const СДлиннойПодписью = Template.bind({});
СДлиннойПодписью.args = {
  label: "Очень длинное название поля для проверки отображения в интерфейсе",
};

export const СИконкой = Template.bind({});
СИконкой.args = {
  label: "Выберите значение",
  icon: (
    <Icon
      name="search"
      color="action"
      fontSize="small"
      sx={{ width: 14, height: 14 }}
    />
  ),
};

export const Компактный = Template.bind({});
Компактный.args = {
  label: "Выберите значение",
  size: "small",
};

export const КомпактныйСОшибкой = Template.bind({});
КомпактныйСОшибкой.args = {
  label: "Выберите значение",
  size: "small",
  meta: {
    touched: true,
    invalid: true,
    error: "Ошибка выбора",
  },
};

export const КомпактныйСДлиннымЗначением = Template.bind({});
КомпактныйСДлиннымЗначением.args = {
  input: {
    value: {
      id: 1,
      label: "Очень длинное значение для компактного списка",
    },
    onChange: () => { },
  },
  label: "Выберите значение",
  size: "small",
};

export const КомпактныйСДлиннойПодписью = Template.bind({});
КомпактныйСДлиннойПодписью.args = {
  label: "Очень длинное название для компактного поля",
  size: "small",
};

export const КомпактныйСИконкой = Template.bind({});
КомпактныйСИконкой.args = {
  label: "Выберите значение",
  icon: (
    <Icon
      name="search"
      color="action"
      fontSize="small"
      sx={{ width: 14, height: 14 }}
    />
  ),
  size: "small",
};

export const МножественныйВыбор = Template.bind({});
МножественныйВыбор.args = {
  label: "Выберите значения",
  multiple: true,
};

export const МножественныйСОшибкой = Template.bind({});
МножественныйСОшибкой.args = {
  label: "Выберите значения",
  error: true,
  helperText: "Ошибка выбора",
  meta: {
    touched: true,
    invalid: true,
    error: "Ошибка выбора",
  },
  multiple: true,
};

export const МножественныйСДлиннымЗначением = Template.bind({});
МножественныйСДлиннымЗначением.args = {
  input: {
    value: [
      {
        id: 1,
        label: "Длинное значение для множественного выбора",
      },
    ],
    onChange: () => { },
  },
  label: "Выберите значения",
  multiple: true,
};

export const МножественныйСДлиннойПодписью = Template.bind({});
МножественныйСДлиннойПодписью.args = {
  label: "Очень длинное название для множественного выбора",
  multiple: true,
};

export const МножественныйСИконкой = Template.bind({});
МножественныйСИконкой.args = {
  label: "Выберите значения",
  icon: (
    <Icon
      name="search"
      color="action"
      fontSize="small"
      sx={{ width: 14, height: 14 }}
    />
  ),
  multiple: true,
};

export const КомпактныйМножественный = Template.bind({});
КомпактныйМножественный.args = {
  label: "Выберите значения",
  size: "small",
  multiple: true,
};

export const КомпактныйМножественныйСОшибкой = Template.bind({});
КомпактныйМножественныйСОшибкой.args = {
  label: "Выберите значения",
  size: "small",
  error: true,
  helperText: "Ошибка выбора",
  meta: {
    touched: true,
    invalid: true,
    error: "Ошибка выбора",
  },
  multiple: true,
};

export const КомпактныйМножественныйСДлиннымЗначением = Template.bind({});
КомпактныйМножественныйСДлиннымЗначением.args = {
  input: {
    value: [
      {
        id: 1,
        label: "Длинное значение для компактного множественного выбора",
      },
    ],
    onChange: () => { },
  },
  label: "Выберите значения",
  size: "small",
  multiple: true,
};

export const КомпактныйМножественныйСДлиннойПодписью = Template.bind({});
КомпактныйМножественныйСДлиннойПодписью.args = {
  label: "Длинное название для компактного множественного выбора",
  size: "small",
  multiple: true,
};

export const КомпактныйМножественныйСИконкой = Template.bind({});
КомпактныйМножественныйСИконкой.args = {
  label: "Выберите значения",
  icon: (
    <Icon
      name="search"
      color="action"
      fontSize="small"
      sx={{ width: 14, height: 14 }}
    />
  ),
  size: "small",
  multiple: true,
};