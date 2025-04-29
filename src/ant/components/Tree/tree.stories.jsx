import React from "react";
import TreeExample from "./tree";
import TreeWithSearch from "./treeWithSearch";

export default {
  title: "antd/Tree",
  component: TreeExample,
};

const DraggableTree = (args) => <TreeExample {...args} />;
const WithSearch = (args) => <TreeWithSearch {...args} />;

export const Draggable = DraggableTree.bind({});
export const Search = WithSearch.bind({});
