import React from "react";
import RadioButton from "./radioButton";

export default {
    title: "Example/antd/Radio",
    component: RadioButton,
}

const RadioTypes = (args) => <RadioButton {...args}/>

export const RadioButtons = RadioTypes.bind({})