import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import "./dropdown.css";

const items = [
  {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const ClickDropdown = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={e => e.preventDefault()}>
      <Space className='droplist'>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default ClickDropdown;