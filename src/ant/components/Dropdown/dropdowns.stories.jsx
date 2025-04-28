import React from "react";
import ClickDropdown from "./clickDropdown";
import HoverDropdown from "./hoverDropdowns";

export default {
    title: "Example/antd/Dropdowns",
    component: {
        ClickDropdown,
        HoverDropdown,
    }
}

const Template = (args) => <> <ClickDropdown {...args}/> <HoverDropdown {...args}/> </>

export const DropdownExamples = Template.bind({})