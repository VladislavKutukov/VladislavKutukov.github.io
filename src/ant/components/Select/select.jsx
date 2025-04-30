import React from 'react';
import { Select, Space } from 'antd';

const handleChange = value => {
  console.log(`selected ${value}`);
};

const Selectors = () => (
  <Space wrap>
    <Select
      defaultValue="иван"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'иван', label: 'Иван' },
        { value: 'мария', label: 'Мария' },
        { value: 'сергей', label: 'Сергей' },
        { value: 'disabled', label: 'Антон', disabled: true },
      ]}
    />
    <Select
      defaultValue="мария"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'мария', label: 'Мария' }]}
    />
    <Select
      defaultValue="сергей"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'сергей', label: 'Сергей' }]}
      placeholder="Выберите вариант"
    />
  </Space>
);
export default Selectors;