import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

const PasswordInput = (style) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <div style={style}>
      <Space direction="vertical">
        <Input.Password placeholder="Введите пароль" />
        <Input.Password
          placeholder="Введите пароль"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
        <Space direction="horizontal">
          <Input.Password
            placeholder="Введите пароль"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
          />
          <Space direction="horizontal">
            <Input.Password
              placeholder="input password"
              visibilityToggle={{
                visible: passwordVisible,
                onVisibleChange: setPasswordVisible,
              }}
            />
            <Button
              style={{ width: 80 }}
              onClick={() => setPasswordVisible((prevState) => !prevState)}
            >
              {passwordVisible ? "Скрыть" : "Показывать"}
            </Button>
          </Space>
          <Input.Password disabled placeholder="disabled input password" />
        </Space>
        <Input.Password disabled placeholder="(Недоступно) Введите пароль" />
      </Space >
    </div >
  );
};

export default PasswordInput;
