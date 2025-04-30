import React from "react";
import { Cascader } from "antd";

const options = [
  {
    value: "zhejiang",
    label: "Паспорт работ",
    children: [
      {
        value: "hangzhou",
        label: "Полетные задания",
        children: [
          {
            value: "xihu",
            label: "Просмотр",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Паспорт работ",
    children: [
      {
        value: "hangzhou",
        label: "Полетные задания",
        children: [
          {
            value: "xihu",
            label: "Просмотр",
          },
        ],
      },
    ],
  },
];

const onChange = (value) => {
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
    <Cascader
      placeholder="Выберите справочник"
      variant="borderless"
      options={options}
      onChange={onChange}
    />
    <br />
    <br />
    <Cascader
      placeholder="Выберите справочник"
      variant="filled"
      options={options}
      onChange={onChange}
    />
    <br />
    <br />
    <Cascader
      placeholder="Выберите справочник"
      variant="outlined"
      options={options}
      onChange={onChange}
    />
    <br />
    <br />
    <Cascader
      placeholder="Выберите справочник"
      variant="underlined"
      options={options}
      onChange={onChange}
    />
  </>
);

export default Cascaders;
