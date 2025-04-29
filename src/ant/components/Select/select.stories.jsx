import React from "react";
import Selectors from "./select";
import SearchSelect from "./searchSelect";
import MultiSelect from "./multiSelect";

export default {
    title: "ANTD/Select",
    component: Selectors, 
}

const Common = (args) => <Selectors {...args}/>
const Search = (args) => <SearchSelect {...args}/>
const Multi = (args) => <MultiSelect {...args}/>

export const CommonSelect = Common.bind({})
export const SelectWithSearch = Search.bind({})
export const MultiSelector = Multi.bind({}) 