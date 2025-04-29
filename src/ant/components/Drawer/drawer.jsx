import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";

const DrawerForm = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Открыть
        </Button>
      </Space>
      <Drawer
        title="Список справочников"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Закрыть</Button>
            <Button type="primary" onClick={onClose}>
              Сохранить
            </Button>
          </Space>
        }
      >
        <p>Паспорт работ</p>
        <p>Дешифрирование</p>
        <p>Верификация</p>
      </Drawer>
    </>
  );
};

export default DrawerForm;
