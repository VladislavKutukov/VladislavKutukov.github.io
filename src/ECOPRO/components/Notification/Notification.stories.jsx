// src/components/Notification/Notification.stories.tsx

import React from "react";
import Notification from "./Notification";

export default {
  title: "ECOPRO/Notification",
  component: Notification,
};

const messages = [
  { message: "Success message!", type: "success", notificationId: "1" },
  { message: "Error message!", type: "error", notificationId: "2" },
  { message: "Warning message!", type: "warning", notificationId: "3" },
];

const Template = (args) => <Notification {...args} />;

export const NoMessages = Template.bind({});
NoMessages.args = {
  messages: [],
};

export const WithMessages = Template.bind({});
WithMessages.args = {
  messages: messages,
  onClose: (id) => {
    console.log(`Notification closed with id: ${id}`);
  },
};
