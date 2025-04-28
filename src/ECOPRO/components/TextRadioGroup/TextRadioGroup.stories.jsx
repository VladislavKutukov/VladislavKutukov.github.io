// TextRadioGroup.stories.tsx

import React, { useState } from "react";

import TextRadioGroup from "./TextRadioGroup";

// Определение метаданных для компонента
export default {
  title: "ECOPRO/TextRadioGroup",
  component: TextRadioGroup,
};

// Определение примера данных для элементов
const items = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

// Настройка основного варианта с использованием состояния
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

// История для стандартного состояния
export const Default = Template.bind({});
Default.args = {
  items: items,
  selectedItem: items[0], // Первый элемент выбран по умолчанию
  groupName: "exampleGroup",
  className: "custom-class", // Если нужно, добавьте свой класс для стилизации
};

// История для случая без выбранного элемента
export const NoSelection = Template.bind({});
NoSelection.args = {
  items: items,
  selectedItem: undefined,
  groupName: "exampleGroup",
};

// История для большего количества элементов
export const WithMoreItems = Template.bind({});
WithMoreItems.args = {
  items: [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ],
  selectedItem: { value: "option3", label: "Option 3" }, // Третий элемент выбран по умолчанию
  groupName: "exampleGroup",
};
