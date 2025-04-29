import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import "./dropdown.css";

const items = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Дешифрирование
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Верификация
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "Паспорт работ",
    key: "3",
    disabled: true,
  },
];

const HoverDropdown = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space className="droplist">
        Список справочников по наведению
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default HoverDropdown;
