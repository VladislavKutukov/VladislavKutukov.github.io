import React from "react";
import CommonSteps from "./commonSteps";
import StepsWithButtonNavigation from "./stepsWithButtonnavigation";
import DotStyleSteps from "./dotStyleSteps";

export default {
  title: "antd/Steps",
  component: CommonSteps,
};

const CommonStep = (args) => <CommonSteps {...args} />;
const ButtonNavigationSteps = (args) => <StepsWithButtonNavigation {...args} />;
const DotStyleStep = (args) => <DotStyleSteps {...args} />;

export const Common = CommonStep.bind({});
export const ButtonNavigation = ButtonNavigationSteps.bind({});
export const DotStyle = DotStyleStep.bind({});

const CommonArgs = {
  border: "1px solid #f0f0f0",
  borderRadius: "20px",
  padding: "20px",
};

Common.args = CommonArgs;
ButtonNavigation.args = CommonArgs;
DotStyle.args = CommonArgs;
