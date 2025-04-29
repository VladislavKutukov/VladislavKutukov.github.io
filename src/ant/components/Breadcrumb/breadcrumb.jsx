import React from "react";
import { Breadcrumb } from "antd";

const BreadcrumbComponent = () => (
  <Breadcrumb
    items={[
      {
        title: "Home",
      },
      {
        title: <a href="">Паспорт работ</a>,
      },
      {
        title: <a href="">Полетные задания</a>,
      },
      {
        title: "Создание",
      },
    ]}
  />
);

export default BreadcrumbComponent;
