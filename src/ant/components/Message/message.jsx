import React from "react";
import { Button, message, Space } from "antd";
const MessageExample = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Запись в справочнике паспорт работ успешно создана",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Заполните обязательные поля!",
    });
  };
  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "Запись в справочнике паспорт работ не создана",
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Успешно</Button>
        <Button onClick={error}>Ошибка</Button>
        <Button onClick={warning}>Предупреждение</Button>
      </Space>
    </>
  );
};
export default MessageExample;
