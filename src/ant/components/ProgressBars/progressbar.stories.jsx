import React from "react";
import RowProgressbar from "./rowProgressbar";
import CircleProgressbar from "./circleProgressbar";
import MultyProgressbar from "./multiProgressbar";

export default {
  title: "antd/Индикатор Выполнения",
  component: RowProgressbar,
};

const Row = (args) => <RowProgressbar {...args} />;
const Circle = (args) => <CircleProgressbar {...args} />;
const Multy = (args) => <MultyProgressbar {...args} />;

export const ИндикаторВыполненияСтрока = Row.bind({});
export const КруговойИндикаторВыполнения = Circle.bind({});
export const КомбинированныйИндикаторВыполнения = Multy.bind({});
