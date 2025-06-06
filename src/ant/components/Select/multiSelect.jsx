import React from 'react';
import { Select } from 'antd';

const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const handleChange = value => {
  console.log(`selected ${value}`);
};

const MultiSelect = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="Выберите тэги"
    onChange={handleChange}
    options={options}
  />
);

export default MultiSelect;