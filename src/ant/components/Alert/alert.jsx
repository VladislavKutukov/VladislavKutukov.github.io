import React from "react";
import { Alert } from "antd";

const AlertMessages = () => (
  <>
    <Alert
      message="Создание полетного задания прошло успешно!"
      type="success"
    />
    <br />
    <Alert message="Вы изменили подложку карты" type="info" />
    <br />
    <Alert message="Заполните все обязательные поля!" type="warning" />
    <br />
    <Alert
      message="Возникла ошибка при создании полетного задания!"
      type="error"
    />
  </>
);

export default AlertMessages;
