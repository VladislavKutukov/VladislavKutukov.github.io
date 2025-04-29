// src/components/MyTable.jsx
import React, { useState } from "react";
import { Table } from "antd";

const CommonTable = ({ data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
      columns={[
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
      ]}
      dataSource={data}
      rowKey="key" // Должен быть уникальный
    />
  );
};

export default CommonTable;
