import React from "react";
import DrawerForm from "./drawer";

export default {
    title: "Example/antd/Drawer",
    component: DrawerForm,
}

const Template = (args) => <DrawerForm {...args}/>

export const DrawerExample = Template.bind({})