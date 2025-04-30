import { Field, Form } from "react-final-form";
import { Button, Stack } from "@mui/material";
import AsyncSelect from "./asyncSelect";
export default {
  title: "MUI/Асинхронный выбор",
  component: AsyncSelect,
  argTypes: {},
};

function ExampleForm({ initialValues, ...props }) {
  return (
    <Form
      onSubmit={(values) => {
        alert(printValue(values.select));
      }}
      initialValues={initialValues}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ width: "300px" }}>
            <Field name="select">
              {({ input, meta }) => (
                <AsyncSelect
                  input={input}
                  meta={meta}
                  style={{ marginBottom: 0 }}
                  loadOptions={loadOptions}
                  {...props}
                />
              )}
            </Field>

            <Button
              variant="contained"
              sx={{ width: "140px" }}
              onClick={handleSubmit}
            >
              Отправить
            </Button>
          </Stack>
        </form>
      )}
    </Form>
  );
}

const printValue = (value) =>
  Array.isArray(value)
    ? value.map((option) => option.displayName)
    : value?.displayName;

const loadOptions = () =>
  new Promise((resolve) => {
    const options = {
      entries: [
        { id: 0, displayName: "Вариант 0" },
        { id: 1, displayName: "Вариант 1" },
        { id: 2, displayName: "Вариант 2" },
        { id: 3, displayName: "Вариант 3" },
        { id: 4, displayName: "Вариант 4" },
      ],
      total: 5,
    };
    resolve(options);
  });

const Template = (args) => <ExampleForm {...args} />;

export const Стандартный = Template.bind({});
Стандартный.args = {
  label: "Стандартный",
};

export const СПодсказкой = Template.bind({});
СПодсказкой.args = {
  placeholder: "Выберите значение",
};

export const СНачальнымЗначением = Template.bind({});
СНачальнымЗначением.args = {
  initialValues: {
    select: { id: 0, displayName: "Вариант 0" },
  },
  label: "С начальным значением",
};

export const МножественныйВыбор = Template.bind({});
МножественныйВыбор.args = {
  initialValues: {
    select: [
      { id: 0, displayName: "Вариант 0" },
      { id: 4, displayName: "Вариант 4" },
    ],
  },
  label: "Множественный выбор",
  multiple: true,
};