import React from "react";
import MyButton from "./Button";

export default {
  title: "antd/MyButton",
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Создать",
  onClick: () => alert("Вы нажали кнопку"),
};
