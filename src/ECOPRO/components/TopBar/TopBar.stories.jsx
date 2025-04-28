// src/stories/TopBar.stories.tsx

import React from "react";
import TopBar from "./TopBar";
import Button from "../Button";

export default {
  title: "ECOPRO/TopBar",
  component: TopBar,
};

const Template = (args) => <TopBar {...args} />;

// Основная история с кнопкой меню и логотипом
export const Default = Template.bind({});
Default.args = {
  onToggleMenu: () => alert("Menu toggled!"),
  LogoComponent: <div style={{ fontWeight: "bold" }}>My Logo</div>,
  RightSideRenderFn: () => <Button>Right Button</Button>,
  children: <div>Central Content</div>,
};

// История без кнопки меню
export const WithoutMenuButton = Template.bind({});
WithoutMenuButton.args = {
  LogoComponent: <div style={{ fontWeight: "bold" }}>My Logo</div>,
  RightSideRenderFn: () => <Button>Right Button</Button>,
  children: <div>Central Content</div>,
};
