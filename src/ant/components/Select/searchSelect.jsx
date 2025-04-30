import React from 'react';
import { Select } from 'antd';

const SearchSelect = () => (
  <Select
  showSearch
  style={{ width: 200 }}
  placeholder="Поиск..."
  optionFilterProp="label"
  filterSort={(optionA, optionB) => {
    var _a, _b;
    return (
      (_a = optionA?.label) ?? ''
    )
      .toLowerCase()
      .localeCompare(
        ((_b = optionB?.label) ?? '').toLowerCase()
      );
  }}
  options={[
    {
      value: '1',
      label: 'Не определено',
    },
    {
      value: '2',
      label: 'Закрыто',
    },
    {
      value: '3',
      label: 'В обработке',
    },
    {
      value: '4',
      label: 'Идентифицировано',
    },
    {
      value: '5',
      label: 'Решено',
    },
    {
      value: '6',
      label: 'Отменено',
    },
  ]}
/>
);

export default SearchSelect;