import React from "react";
import CommonSteps from "./commonSteps";
import StepsWithButtonNavigation from "./stepsWithButtonnavigation";
import DotStyleSteps from "./dotStyleSteps";

export default {
  title: "antd/Этапы",
  component: CommonSteps,
};

const CommonStep = (args) => <CommonSteps {...args} />;
const ButtonNavigationSteps = (args) => <StepsWithButtonNavigation {...args} />;
const DotStyleStep = (args) => <DotStyleSteps {...args} />;

export const Стандартные = CommonStep.bind({});
export const ЭтапыСПереключениемКнопками = ButtonNavigationSteps.bind({});
export const ЭтапыСтилизованныеПодТочки = DotStyleStep.bind({});

const CommonArgs = {
  border: "1px solid #f0f0f0",
  borderRadius: "20px",
  padding: "20px",
};

Стандартные.args = CommonArgs;
ЭтапыСПереключениемКнопками.args = CommonArgs;
ЭтапыСтилизованныеПодТочки.args = CommonArgs;
