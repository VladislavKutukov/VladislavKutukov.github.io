import React from 'react';
import { Select } from 'antd';

const SearchInput = () => (
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Search to Select"
    optionFilterProp="label"
    filterSort={(optionA, optionB) => {
      var _a, _b;
      return (
        (_a = optionA === null || optionA === void 0 ? void 0 : optionA.label) !== null &&
        _a !== void 0
          ? _a
          : ''
      )
        .toLowerCase()
        .localeCompare(
          ((_b = optionB === null || optionB === void 0 ? void 0 : optionB.label) !== null &&
          _b !== void 0
            ? _b
            : ''
          ).toLowerCase(),
        );
    }}
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
);

export default SearchInput;