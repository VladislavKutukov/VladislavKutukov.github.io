import React from "react";
import Selectors from "./select";
import SearchSelect from "./searchSelect";
import MultiSelect from "./multiSelect";

export default {
    title: "ANTD/Селектор",
    component: Selectors, 
}

const Common = (args) => <Selectors {...args}/>
const Search = (args) => <SearchSelect {...args}/>
const Multi = (args) => <MultiSelect {...args}/>

export const Стандартные = Common.bind({})
export const сПоиском = Search.bind({})
export const СВозможностьюВыбораНесколькихВариантов = Multi.bind({}) 