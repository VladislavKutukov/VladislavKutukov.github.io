// src/stories/TopBar.stories.tsx

import React from "react";
import TopBar from "./TopBar";
import Button from "../Button";
import NavigationLinks from "../NavigationLinks";

export default {
  title: "ECOPRO/TopBar",
  component: TopBar,
};

const Template = (args) => <TopBar {...args} />;

// Основная история с кнопкой меню и логотипом
export const Default = Template.bind({});
Default.args = {
  onToggleMenu: () => alert("Menu toggled!"),
  LogoComponent: <div style={{ fontWeight: "bold" }}>Логотип</div>,
  RightSideRenderFn: () => <Button>Поиск</Button>,
  children: (
    <NavigationLinks
      links={[
        { to: "/home", caption: "Паспорт работ" },
        { to: "/about", caption: "Справочники" },
        { to: "/contact", caption: "Отчеты" },
      ]}
    />
  ),
};

// История без кнопки меню
export const WithoutMenuButton = Template.bind({});
WithoutMenuButton.args = {
  LogoComponent: <div style={{ fontWeight: "bold" }}>Логотип</div>,
  RightSideRenderFn: () => <Button>Поиск</Button>,
  children: (
    <NavigationLinks
      links={[
        { to: "/home", caption: "Паспорт работ" },
        { to: "/about", caption: "Справочники" },
        { to: "/contact", caption: "Отчеты" },
      ]}
    />
  ),
};
