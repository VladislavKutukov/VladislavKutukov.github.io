// Table.stories.tsx
import React from "react";
import Table from "./Table";

export default {
  title: "ECOPRO/Table",
  component: Table,
};

const defaultHeader = [
  {
    name: "id",
    displayName: "1",
    isFilter: true,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "2",
    displayName: "Статус",
    isFilter: true,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "3",
    displayName: "Тип съемки",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "4",
    displayName: "Пространственное разрешение съемки",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "5",
    displayName: "Перекрытие кадров боковое",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "6",
    displayName: "Перекрытие кадров продольное",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "7",
    displayName: "Станция ГНСС",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "8",
    displayName: "Камеры",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
];

const defaultData = [
  new Map([
    ["id", { value: 1 }],
    ["2", { value: "AR" }],
    ["3", { value: "RD" }],
    ["4", { value: "3.0" }],
    ["5", { value: "80" }],
    ["6", { value: "60" }],
    ["7", { value: "GNSS" }],
    ["8", { value: "CM" }],
  ]),
  new Map([
    ["id", { value: 1 }],
    ["2", { value: "AR" }],
    ["3", { value: "RD" }],
    ["4", { value: "3.0" }],
    ["5", { value: "80" }],
    ["6", { value: "60" }],
    ["7", { value: "GNSS" }],
    ["8", { value: "CM" }],
  ]),
  new Map([
    ["id", { value: 1 }],
    ["2", { value: "AR" }],
    ["3", { value: "RD" }],
    ["4", { value: "3.0" }],
    ["5", { value: "80" }],
    ["6", { value: "60" }],
    ["7", { value: "GNSS" }],
    ["8", { value: "CM" }],
  ]),
  new Map([
    ["id", { value: 1 }],
    ["2", { value: "AR" }],
    ["3", { value: "RD" }],
    ["4", { value: "3.0" }],
    ["5", { value: "80" }],
    ["6", { value: "60" }],
    ["7", { value: "GNSS" }],
    ["8", { value: "CM" }],
  ]),
  new Map([
    ["id", { value: 1 }],
    ["2", { value: "AR" }],
    ["3", { value: "RD" }],
    ["4", { value: "3.0" }],
    ["5", { value: "80" }],
    ["6", { value: "60" }],
    ["7", { value: "GNSS" }],
    ["8", { value: "CM" }],
  ]),
];

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  header: defaultHeader,
  data: defaultData,
  primaryKey: "id",
  orderedColumn: "+id",
};

export const EmptyData = Template.bind({});
EmptyData.args = {
  header: defaultHeader,
  data: [], // Пустые данные
  primaryKey: "id",
  orderedColumn: "+id",

  hideHeader: false,
};
