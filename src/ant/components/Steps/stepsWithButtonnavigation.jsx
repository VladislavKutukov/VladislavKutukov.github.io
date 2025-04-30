import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";

const steps = [
  {
    title: "Первый пункт",
    content: "Контент первого пункта",
  },
  {
    title: "Второй пункт",
    content: "Контент второго пункта",
  },
  {
    title: "Третий пункт",
    content: "Контент третьего пункта",
  },
];

const StepsWithButtonNavigation = (style) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div style={style}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Завершить
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Назад
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepsWithButtonNavigation;
