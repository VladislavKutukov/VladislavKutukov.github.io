import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Станция GNSS",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Категория 1",
        value: "Category 1",
        children: [
          {
            text: "GNSS",
            value: "Yellow",
          },
          {
            text: "GNSS",
            value: "Pink",
          },
        ],
      },
      {
        text: "Категория 2",
        value: "Category 2",
        children: [
          {
            text: "GNSS",
            value: "Green",
          },
          {
            text: "GNSS",
            value: "Black",
          },
        ],
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: "30%",
  },
  {
    title: "БЛА",
    dataIndex: "age",
  },
  {
    title: "Камеры",
    dataIndex: "address",
    filters: [
      {
        text: "GNSS",
        value: "London",
      },
      {
        text: "GNSS",
        value: "New York",
      },
      {
        text: "GNSS",
        value: "Sydney",
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: "40%",
  },
];

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

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableWithFilter = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default TableWithFilter;
