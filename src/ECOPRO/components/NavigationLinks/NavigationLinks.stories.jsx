import React from "react";
import NavigationLinks from "./NavigationLinks";

export default {
  title: "ECOPRO/NavigationLinks",
  component: NavigationLinks,
};

const Template = (args) => <NavigationLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { to: "/home", caption: "Паспорт работ" },
    { to: "/about", caption: "Справочники" },
    { to: "/contact", caption: "Отчеты" },
  ],
};
