import React from 'react';
import { Cascader } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const onChange = value => {
  console.log(value);
};

const Cascaders = () => (
  <>
    <Cascader size="large" options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader size="small" options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader placeholder="Please select" variant="borderless" options={options} onChange={onChange}/>
    <br />
    <br />
    <Cascader placeholder="Please select" variant="filled"  options={options} onChange={onChange}/>
    <br />
    <br />
    <Cascader placeholder="Please select" variant="outlined"  options={options} onChange={onChange}/>
    <br />
    <br />
    <Cascader placeholder="Please select" variant="underlined"  options={options} onChange={onChange}/>
  </>
);

export default Cascaders;