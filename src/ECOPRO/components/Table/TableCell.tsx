import type { TableCellProps } from "./Table.type";
import { joinClassNames } from "../Utils";

function TableCell({
  value="",
  rowValues,
  className,
  renderFn = (displayValue) => displayValue,
}: TableCellProps) {
  return (
    <td className={joinClassNames(["table__cell", className])}>
      {renderFn!(value, rowValues)}
    </td>
  );
}

TableCell.defaultProps = {
  value: "",
  rowValues: undefined,
  className: undefined,
  renderFn: (value: TableCellProps["value"]) => value,
};

export default TableCell;
