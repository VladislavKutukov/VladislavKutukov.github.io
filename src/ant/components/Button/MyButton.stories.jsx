import React from "react";
import MyButton from "./Button";

export default {
  title: "antd/Кнопки",
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const ОбычнаяКнопка = Template.bind({});
ОбычнаяКнопка.args = {
  label: "Создать",
  onClick: () => alert("Вы нажали кнопку"),
};
