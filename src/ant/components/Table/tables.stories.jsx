// src/components/Tables.stories.jsx
import React from "react";
import CommonTable from "./commonTable";
import TableWithDraggableRow from "./tableWithDraggableRow";
import TableWithFilter from "./tableWithFilter";
import TableWithPagination from "./tableWithPagination";
import TableWithSearch from "./tableWithSearch";
import TableWithSort from "./tableWithSort";

export default {
  title: "antd/Tables",
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

export const Common = Basic.bind({});
export const DraggableTable = WithDraggableRow.bind({});
export const FilterTable = WithFilter.bind({});
export const PaginationTable = WithPagination.bind({});
export const SearchTable = WithSearch.bind({});
export const SortTable = WithSort.bind({});

const CommonArgs = { data };

Common.args = CommonArgs;
DraggableTable.args = CommonArgs;
FilterTable.args = CommonArgs;
PaginationTable.args = CommonArgs;
SearchTable.args = CommonArgs;
SortTable.args = CommonArgs;
