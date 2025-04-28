import React from 'react';
import { Checkbox } from 'antd';

const CheckboxTypes = () => (
  <>
    <Checkbox defaultChecked={false} />
    <br />
    <Checkbox indeterminate disabled/>
    <br />
    <Checkbox defaultChecked disabled/> 
  </>
);

export default CheckboxTypes;