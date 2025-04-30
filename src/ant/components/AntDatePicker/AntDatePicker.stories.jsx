import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";

import AntDatePicker from "./AntDatePicker";
import moment from "moment";

export default {
  title: "antd/Строка Выбора Даты",
  component: AntDatePicker,
  argTypes: {},
};

const Template = (args) => {
  // eslint-disable-next-line no-console
  const onChange = (date, dateString) => console.log(date, dateString);

  return (
    <ConfigProvider locale={ruRu}>
      <AntDatePicker onChange={onChange} {...args} />
    </ConfigProvider>
  );
};

export const ОбычноеПолеВыбораДаты = Template.bind({});
ОбычноеПолеВыбораДаты.args = {
  placeholder: "Выберите дату",
};

export const ПолеВыбораДатыСПодтверждением = Template.bind({});
ПолеВыбораДатыСПодтверждением.args = {
  needConfirm: true,
};

export const УвеличенноеПолеВыбораДаты = Template.bind({});
УвеличенноеПолеВыбораДаты.args = {
  showTime: true,
  size: "large",
};

export const СтандартноеПолеВыбораДатыИВремени = Template.bind({});
СтандартноеПолеВыбораДатыИВремени.args = {
  showTime: true,
};

export const УменьшенноеПолеВыбораДаты = Template.bind({});
УменьшенноеПолеВыбораДаты.args = {
  showTime: true,
  size: "small",
};

export const НедоступноеПолеВыбораДаты = Template.bind({});
НедоступноеПолеВыбораДаты.args = {
  showTime: true,
  disabled: true,
};

export const ПолеВыбораДатыТолькоПросмотр = Template.bind({});
ПолеВыбораДатыТолькоПросмотр.args = {
  showTime: true,
  inputReadOnly: true,
  defaultValue: moment(),
  open: false,
  allowClear: false,
};

export const ПолеВыбораДатыСИзмененнымСтилем = Template.bind({});
ПолеВыбораДатыСИзмененнымСтилем.args = {
  defaultValue: moment(),
  showTime: true,
  style: { color: "#FF0000" },
};
