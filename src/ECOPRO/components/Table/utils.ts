import type { TableHeaderItem } from "./Table.type";

function hasTotalFn(header: TableHeaderItem[] = []) {
  if (!Array.isArray(header)) return false;
  return header.some((headerColumn) => headerColumn.totalFn != null);
}

export { hasTotalFn };
export default {};
