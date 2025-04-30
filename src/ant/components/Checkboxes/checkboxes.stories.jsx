import React from "react";
import CheckboxTypes from "./checkboxes";
import RelatedChackboxes from "./relatedCheckboxes";

export default {
  title: "antd/Флажки",
  component: CheckboxTypes,
};

const TypesCheckboxes = (args) => <CheckboxTypes {...args} />;
const RelatedChackboxs = (args) => <RelatedChackboxes {...args} />;

export const СтандартныеФлажки = TypesCheckboxes.bind({});
export const СвязанныеФлажки = RelatedChackboxs.bind({});
