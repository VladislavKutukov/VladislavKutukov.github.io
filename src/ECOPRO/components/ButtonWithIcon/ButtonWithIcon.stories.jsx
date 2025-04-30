// src/stories/ButtonWithIcon.stories.tsx

import ButtonWithIcon from "./ButtonWithIcon";

export default {
  title: "ECOPRO/Кнопки с Значками",
  component: ButtonWithIcon,
};

const Template = (args) => <ButtonWithIcon {...args} />;

export const ОбычнаяКнопка = Template.bind({});
ОбычнаяКнопка.args = {
  glyphNameLeft: "arrow-left",
  glyphNameRight: "arrow-right",
  children: "Добавить",
  primary: true,
  className: "custom-class",
  onClick: () => alert("Button clicked!"),
};

export const КнопкаБезЗначков = Template.bind({});
КнопкаБезЗначков.args = {
  children: "Добавить",
  primary: false,
  onClick: () => alert("Button without icons clicked!"),
};

export const КнопкаСЗначкомСлева = Template.bind({});
КнопкаСЗначкомСлева.args = {
  glyphNameLeft: "arrow-left",
  children: "Добавить",
  primary: true,
  onClick: () => alert("Button with left icon clicked!"),
};

export const КнопкаСЗначкомСправа = Template.bind({});
КнопкаСЗначкомСправа.args = {
  glyphNameRight: "arrow-right",
  children: "Добавить",
  primary: false,
  onClick: () => alert("Button with right icon clicked!"),
};

// Вы можете добавить больше историй для других случаев использования
