import React from "react";
import ModalForm from "./modal";

export default {
    title: "Example/antd/Modal",
    component: ModalForm,
}

const Template = (args) => <ModalForm {...args}/>

export const ModalFormExample = Template.bind({})