// src/components/Notification/Notification.stories.tsx

import React from "react";
import Notification from "./Notification";

export default {
  title: "ECOPRO/Уведомления",
  component: Notification,
};

const messages = [
  {
    message: "Создание полетного задания прошло успешно!",
    type: "success",
    notificationId: "1",
  },
  {
    message: "Возникла ошибка при создании полетного задания!",
    type: "error",
    notificationId: "2",
  },
  {
    message: "Заполните все обязательные поля!",
    type: "warning",
    notificationId: "3",
  },
];

const Template = (args) => <Notification {...args} />;

export const БезУведомлений = Template.bind({});
БезУведомлений.args = {
  messages: [],
};

export const СУведомлениями = Template.bind({});
СУведомлениями.args = {
  messages: messages,
  onClose: (id) => {
    console.log(`Notification closed with id: ${id}`);
  },
};
