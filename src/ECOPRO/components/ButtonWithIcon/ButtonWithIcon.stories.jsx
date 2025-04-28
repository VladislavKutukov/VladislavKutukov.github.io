// src/stories/ButtonWithIcon.stories.tsx

import ButtonWithIcon from "./ButtonWithIcon";

export default {
  title: "ECOPRO/ButtonWithIcon",
  component: ButtonWithIcon,
};

const Template = (args) => <ButtonWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  glyphNameLeft: "arrow-left",
  glyphNameRight: "arrow-right",
  children: "Click Me",
  primary: true,
  className: "custom-class",
  onClick: () => alert("Button clicked!"),
};

export const WithoutIcons = Template.bind({});
WithoutIcons.args = {
  children: "No Icons",
  primary: false,
  onClick: () => alert("Button without icons clicked!"),
};

export const WithOnlyLeftIcon = Template.bind({});
WithOnlyLeftIcon.args = {
  glyphNameLeft: "arrow-left",
  children: "Left Icon Only",
  primary: true,
  onClick: () => alert("Button with left icon clicked!"),
};

export const WithOnlyRightIcon = Template.bind({});
WithOnlyRightIcon.args = {
  glyphNameRight: "arrow-right",
  children: "Right Icon Only",
  primary: false,
  onClick: () => alert("Button with right icon clicked!"),
};

// Вы можете добавить больше историй для других случаев использования
