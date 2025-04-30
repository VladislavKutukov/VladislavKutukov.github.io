// src/components/Tables.stories.jsx
import React from "react";
import CommonTable from "./commonTable";
import TableWithDraggableRow from "./tableWithDraggableRow";
import TableWithFilter from "./tableWithFilter";
import TableWithPagination from "./tableWithPagination";
import TableWithSearch from "./tableWithSearch";
import TableWithSort from "./tableWithSort";

export default {
  title: "antd/Таблицы",
  components: CommonTable,
};

const data = [
  {
    key: "1",
    name: "GNSS",
    age: "DN",
    address: "SM",
  },
  {
    key: "2",
    name: "GNSS",
    age: "DN",
    address: "SM",
  },
  {
    key: "3",
    name: "GNSS",
    age: "DN",
    address: "SM",
  },
];

const Basic = (args) => <CommonTable {...args} />;
const WithDraggableRow = (args) => <TableWithDraggableRow {...args} />;
const WithFilter = (args) => <TableWithFilter {...args} />;
const WithPagination = (args) => <TableWithPagination {...args} />;
const WithSearch = (args) => <TableWithSearch {...args} />;
const WithSort = (args) => <TableWithSort {...args} />;

export const Стандартная = Basic.bind({});
export const ТаблицаСПеремещяемымиСтроками = WithDraggableRow.bind({});
export const ТаблицаСФильтрацией = WithFilter.bind({});
export const ТаблицаСПагинацией = WithPagination.bind({});
export const ТаблицаСПоиском = WithSearch.bind({});
export const ТаблицаССортировкой = WithSort.bind({});

const CommonArgs = { data };

Стандартная.args = CommonArgs;
ТаблицаСПеремещяемымиСтроками.args = CommonArgs;
ТаблицаСФильтрацией.args = CommonArgs;
ТаблицаСПагинацией.args = CommonArgs;
ТаблицаСПоиском.args = CommonArgs;
ТаблицаССортировкой.args = CommonArgs;
