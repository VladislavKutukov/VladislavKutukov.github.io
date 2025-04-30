import React, { useState } from "react";
import { Radio, Space, Tabs } from "antd";

const TabsList = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Выбор расположения вкладок:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">Верх</Radio.Button>
          <Radio.Button value="bottom">Низ</Radio.Button>
          <Radio.Button value="left">Лево</Radio.Button>
          <Radio.Button value="right">Право</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={Array.from({ length: 3 }).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Пункт ${id}`,
            key: id,
            children: `Данные пункта ${id}`,
          };
        })}
      />
    </>
  );
};

export default TabsList;
