import React from "react";
import NavigationLinks from "./NavigationLinks";
import { NavigationLink } from "./NavigationLinks.type";

export default {
  title: "Components/NavigationLinks",
  component: NavigationLinks,
};

const Template = (args) => <NavigationLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { to: "/home", caption: "Home" },
    { to: "/about", caption: "About" },
    { to: "/contact", caption: "Contact" },
  ],
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: "custom-class",
  links: [
    { to: "/services", caption: "Services" },
    { to: "/portfolio", caption: "Portfolio" },
    { to: "/blog", caption: "Blog" },
  ],
};
