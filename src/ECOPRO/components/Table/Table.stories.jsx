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
    displayName: "ID",
    isFilter: true,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "name",
    displayName: "Name",
    isFilter: true,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "age",
    displayName: "Age",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "age",
    displayName: "Age",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "age",
    displayName: "Age",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "age",
    displayName: "Age",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "age",
    displayName: "Age",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
  {
    name: "age",
    displayName: "Age",
    isFilter: false,
    isOrder: true,
    totalFn: null,
    className: "table__header-cell",
  },
];

const defaultData = [
  new Map([
    ["id", { value: 1 }],
    ["name", { value: "John Doe" }],
    ["age", { value: 28 }],
  ]),
  new Map([
    ["id", { value: 2 }],
    ["name", { value: "Jane Smith" }],
    ["age", { value: 32 }],
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
