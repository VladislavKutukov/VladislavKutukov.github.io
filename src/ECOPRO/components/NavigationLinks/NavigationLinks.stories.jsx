import React from "react";
import NavigationLinks from "./NavigationLinks";

export default {
  title: "ECOPRO/Навигационные ссылки",
  component: NavigationLinks,
};

const Template = (args) => <NavigationLinks {...args} />;

export const ПримерСсылок = Template.bind({});
ПримерСсылок.args = {
  links: [
    { to: "/home", caption: "Паспорт работ" },
    { to: "/about", caption: "Справочники" },
    { to: "/contact", caption: "Отчеты" },
  ],
};
