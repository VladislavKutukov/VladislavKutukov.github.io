import React, { useContext, useMemo } from "react";
import { HolderOutlined } from "@ant-design/icons";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Table } from "antd";
const RowContext = React.createContext({});
const DragHandle = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: "move" }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};
const columns = [
  { key: "sort", align: "center", width: 80, render: () => <DragHandle /> },
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
const initialData = [
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
const Row = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props["data-row-key"] });
  const style = Object.assign(
    Object.assign(Object.assign({}, props.style), {
      transform: CSS.Translate.toString(transform),
      transition,
    }),
    isDragging ? { position: "relative", zIndex: 9999 } : {}
  );
  const contextValue = useMemo(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners]
  );
  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};
const TableWithDraggableRow = () => {
  const [dataSource, setDataSource] = React.useState(initialData);
  const onDragEnd = ({ active, over }) => {
    if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex(
          (record) =>
            record.key ===
            (active === null || active === void 0 ? void 0 : active.id)
        );
        const overIndex = prevState.findIndex(
          (record) =>
            record.key === (over === null || over === void 0 ? void 0 : over.id)
        );
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };
  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={dataSource.map((i) => i.key)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          rowKey="key"
          components={{ body: { row: Row } }}
          columns={columns}
          dataSource={dataSource}
        />
      </SortableContext>
    </DndContext>
  );
};

export default TableWithDraggableRow;
