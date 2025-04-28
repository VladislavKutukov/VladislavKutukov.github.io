import React from "react";
import Notifications from "./notification.jsx";
 
export default {
    title: "Example/antd/Notifications",
    component: Notifications,
}

const Template = (args) => <Notifications {...args}/>

export const NotificationExample = Template.bind({})