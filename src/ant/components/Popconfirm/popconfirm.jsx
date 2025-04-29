import React from "react";
import { Button, message, Popconfirm } from "antd";

const confirm = (e) => {
  console.log(e);
  message.success("Click on Yes");
};

const cancel = (e) => {
  console.log(e);
  message.error("Click on No");
};

const PopconfirmExample = () => (
  <Popconfirm
    title="Удаление записи"
    description="Вы уверены что хотите удалить запись?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Да"
    cancelText="Нет"
  >
    <Button danger>Удалить</Button>
  </Popconfirm>
);

export default PopconfirmExample;
