import React from "react";
import Cascaders from "./cascader";
import MultiCascader from "./multiCascader";

export default {
  title: "antd/Каскады",
  component: Cascaders,
};

const Common = (args) => <Cascaders {...args} />;
const Multi = (args) => <MultiCascader {...args} />;

export const ОбычныеКаскады = Common.bind({});
export const КаскадыСВыборомНесколькихЭлементов = Multi.bind({});
