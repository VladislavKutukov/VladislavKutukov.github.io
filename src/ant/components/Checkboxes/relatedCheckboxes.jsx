import React, { useState } from "react";
import { Checkbox, Divider } from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Создание", "Редактирование", "Удаление"];
const defaultCheckedList = ["Apple", "Orange"];

const RelatedChackboxes = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Выбрать все
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </>
  );
};

export default RelatedChackboxes;
