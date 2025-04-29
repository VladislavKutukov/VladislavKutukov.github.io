import React from "react";
import Cascaders from "./cascader";
import MultiCascader from "./multiCascader";

export default {
  title: "antd/Cascaders",
  component: Cascaders,
};

const Common = (args) => <Cascaders {...args} />;
const Multi = (args) => <MultiCascader {...args} />;

export const CascadersCommon = Common.bind({});
export const CascadersMulti = Multi.bind({});
