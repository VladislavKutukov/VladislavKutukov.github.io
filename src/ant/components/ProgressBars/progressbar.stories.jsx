import React from "react";
import RowProgressbar from "./rowProgressbar";
import CircleProgressbar from "./circleProgressbar";
import MultyProgressbar from "./multiProgressbar";

export default {
    title: "Example/antd/Progressbar",
    component: RowProgressbar  
}

const Row = (args) => <RowProgressbar {...args}/>
const Circle = (args) => <CircleProgressbar {...args}/>
const Multy = (args) => <MultyProgressbar {...args}/>

export const RowView = Row.bind({})
export const CircleView = Circle.bind({})
export const MultyView = Multy.bind({})
