import React from 'react';
import { InputNumber, Space } from 'antd';

const onChange = value => {
  console.log('changed', value);
};

const NumberInput = (style) => (
  <div style={style}>
  <Space wrap>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} changeOnWheel />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} changeOnWheel />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} changeOnWheel />
  </Space>
  </div>
 
);

export default NumberInput;