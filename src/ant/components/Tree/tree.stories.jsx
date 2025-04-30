import React from "react";
import TreeExample from "./tree";
import TreeWithSearch from "./treeWithSearch";

export default {
  title: "antd/Дерево",
  component: TreeExample,
};

const DraggableTree = (args) => <TreeExample {...args} />;
const WithSearch = (args) => <TreeWithSearch {...args} />;

export const ДеревоСВозможностьюПеремещенияЭлементов = DraggableTree.bind({});
export const ДеревоСПоиском = WithSearch.bind({});
