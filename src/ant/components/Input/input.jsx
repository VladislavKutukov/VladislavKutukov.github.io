import React from 'react';
import { Flex, Input } from 'antd';

const CommonInputs = (style) => (
  <div style={style}> 
  <Flex vertical gap={12}>
    <Input placeholder="Контурный" />
    <Input placeholder="Заливка" variant="filled" />
    <Input placeholder="Без рамки" variant="borderless" />
    <Input placeholder="Подчёркнутый" variant="underlined" />
  </Flex>
  </div>
 
);

export default CommonInputs;