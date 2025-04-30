import React from "react";
import { Flex, Radio } from "antd";

const options = [
  { label: "м", value: "м" },
  { label: "См", value: "См" },
  { label: "Мм", value: "Мм" },
];

const RadioButton = () => (
  <Flex vertical gap="middle">
    <Radio.Group block options={options} defaultValue="м" />
    <Radio.Group
      block
      options={options}
      defaultValue="См"
      optionType="button"
      buttonStyle="solid"
    />
    <Radio.Group
      block
      options={options}
      defaultValue="Мм"
      optionType="button"
    />
  </Flex>
);

export default RadioButton;
