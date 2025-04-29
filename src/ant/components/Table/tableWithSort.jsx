import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Станция",
    dataIndex: "name",
  },

  {
    title: "БЛА",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "Камеры",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    name: "Станция GNSS",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Станция GNSS",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "Станция GNSS",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "Станция GNSS",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableWithSort = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default TableWithSort;
