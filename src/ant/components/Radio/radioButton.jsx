import React from "react";
import { Flex, Radio } from "antd";

const options = [
  { label: "GNSS", value: "Создание" },
  { label: "DN", value: "Редактирование" },
  { label: "CM", value: "Удаление" },
];

const RadioButton = () => (
  <Flex vertical gap="middle">
    <Radio.Group block options={options} defaultValue="Apple" />
    <Radio.Group
      block
      options={options}
      defaultValue="Apple"
      optionType="button"
      buttonStyle="solid"
    />
    <Radio.Group
      block
      options={options}
      defaultValue="Pear"
      optionType="button"
    />
  </Flex>
);

export default RadioButton;
