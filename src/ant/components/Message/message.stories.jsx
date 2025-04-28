import React from "react";
import MessageExample from "./message";

export default {
    title: "Example/antd/Message",
    component: MessageExample,
}

const Template = (args) => <MessageExample {...args}/>

export const MessageView = Template.bind({})