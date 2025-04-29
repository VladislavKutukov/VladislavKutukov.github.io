import React from "react";
import { Divider, Steps } from "antd";

const DotStyleSteps = (style) => (
  <div style={style}>
    <Steps
      progressDot
      current={1}
      items={[
        {
          title: "Пункт 1",
          description: "Описание",
        },
        {
          title: "Пункт 2",
          description: "Описание",
        },
        {
          title: "Пункт 3",
          description: "Описание",
        },
      ]}
    />
    <Divider />
    <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title: "Пункт 1",
          description: "Описание",
        },
        {
          title: "Пункт 2",
          description: "Описание",
        },
        {
          title: "Пункт 3",
          description: "Описание",
        },
      ]}
    />
  </div>
);

export default DotStyleSteps;
