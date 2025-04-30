import React from "react";
import ClickDropdown from "./clickDropdown";
import HoverDropdown from "./hoverDropdowns";

export default {
  title: "antd/Выпадающий Список",
  component: {
    ClickDropdown,
    HoverDropdown,
  },
};

const Template = (args) => (
  <>
    {" "}
    <ClickDropdown {...args} /> <HoverDropdown {...args} />{" "}
  </>
);

export const ВариантыВыпадающихСписков = Template.bind({});
