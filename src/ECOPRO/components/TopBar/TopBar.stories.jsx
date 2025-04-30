// src/stories/TopBar.stories.tsx

import React from "react";
import TopBar from "./TopBar";
import Button from "../Button";
import NavigationLinks from "../NavigationLinks";

export default {
  title: "ECOPRO/Шапка Страницы",
  component: TopBar,
};

const Template = (args) => <TopBar {...args} />;

export const Поумолчанию = Template.bind({});
Поумолчанию.args = {
  onToggleMenu: () => alert("Меню переключено!"),
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

export const БезКнопкиМеню = Template.bind({});
БезКнопкиМеню.args = {
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