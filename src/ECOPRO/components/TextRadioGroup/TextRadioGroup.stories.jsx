// TextRadioGroup.stories.tsx

import React, { useState } from "react";

import TextRadioGroup from "./TextRadioGroup";

export default {
  title: "ECOPRO/Взаимосвязанные Переключатели",
  component: TextRadioGroup,
};

const items = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const Template = (args) => {
  const [selectedItem, setSelectedItem] = useState();

  const handleSelect = (item) => {
    setSelectedItem(item);
    console.log("Selected item:", item);
  };

  return (
    <TextRadioGroup
      {...args}
      selectedItem={selectedItem}
      onSelect={handleSelect}
    />
  );
};

export const Поумолчанию = Template.bind({});
Поумолчанию.args = {
  items: items,
  selectedItem: items[0],
  groupName: "exampleGroup",
  className: "custom-class",
};

export const БезВыбора = Template.bind({});
БезВыбора.args = {
  items: items,
  selectedItem: undefined,
  groupName: "exampleGroup",
};

export const СДополнительнымиПунктами = Template.bind({});
СДополнительнымиПунктами.args = {
  items: [
    { value: "option1", label: "Вариант 1" },
    { value: "option2", label: "Вариант 2" },
    { value: "option3", label: "Вариант 3" },
    { value: "option4", label: "Вариант 4" },
    { value: "option5", label: "Вариант 5" },
  ],
  selectedItem: { value: "option3", label: "Вариант 3" },
  groupName: "exampleGroup",
};