import React from 'react';
import { Flex, Input } from 'antd';

const CommonInputs = (style) => (
  <div style={style}> 
  <Flex vertical gap={12}>
    <Input placeholder="Outlined" />
    <Input placeholder="Filled" variant="filled" />
    <Input placeholder="Borderless" variant="borderless" />
    <Input placeholder="Underlined" variant="underlined" />
  </Flex>
  </div>
 
);

export default CommonInputs;