import React from "react";
import { Cascader } from "antd";
const { SHOW_CHILD } = Cascader;

const options = [
  {
    label: "Группа 1",
    value: "light",
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: "Группа 2",
    value: "bamboo",
    children: [
      {
        label: "Подгруппа",
        value: "little",
        children: [
          {
            label: "Элемент 1",
            value: "fish",
          },
          {
            label: "Элемент 2",
            value: "cards",
          },
          {
            label: "Элемент 3",
            value: "bird",
          },
        ],
      },
    ],
  },
];

const MultiCascader = () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{ width: "100%" }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ["bamboo", "little", "fish"],
          ["bamboo", "little", "cards"],
          ["bamboo", "little", "bird"],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: "100%" }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={[["bamboo"]]}
      />
    </>
  );
};

export default MultiCascader;
