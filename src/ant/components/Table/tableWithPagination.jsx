import React, { useState } from "react";
import { Table } from "antd";
const columns = [
  {
    title: "Станция GNSS",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "БЛА",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Камеры",
    dataIndex: "address",
    key: "address",
  },
];

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  name: `Станция ${i}`,
  age: `БЛА ${i}`,
  address: `Камера ${i}`,
}));

const TableWithPagination = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
    />
  );
};

export default TableWithPagination;
