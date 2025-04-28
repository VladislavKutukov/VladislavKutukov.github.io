import React from "react";
import CheckboxTypes from "./checkboxes";
import RelatedChackboxes from "./relatedCheckboxes";

export default {
    title: "Example/antd/Checkbox",
    component: CheckboxTypes
}

const TypesCheckboxes = (args) => <CheckboxTypes {...args}/>
const RelatedChackboxs = (args) => <RelatedChackboxes {...args}/>

export const Common = TypesCheckboxes.bind({}) 
export const Related = RelatedChackboxs.bind({}) 