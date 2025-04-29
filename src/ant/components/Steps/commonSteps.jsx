import React from "react";
import { Steps } from "antd";

const CommonSteps = (style) => (
  <div style={style}>
    <Steps
      size="small"
      current={1}
      items={[
        {
          title: "Пункт 1",
        },
        {
          title: "Пункт 2",
        },
        {
          title: "Пункт 3",
        },
      ]}
    />
  </div>
);

export default CommonSteps;
