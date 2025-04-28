import React from "react";
import MyButton from "./Button";

export default {
  title: "Example/antd/MyButton",
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  onClick: () => alert("Button Clicked!"),
};
