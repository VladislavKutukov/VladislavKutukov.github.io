import React from 'react';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Input, Space } from 'antd';

const WarnInputs = (style) => (
  <div style={style}>
    <Space direction="vertical" style={{ width: '100%' }}>
    <Input status="error" placeholder="Ошибка" />
    <Input status="warning" placeholder="Предупреждение" />
    <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Ошибка с префиксом" />
    <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Предупреждение с префиксом" />
  </Space>
  </div>
  
);

export default WarnInputs;