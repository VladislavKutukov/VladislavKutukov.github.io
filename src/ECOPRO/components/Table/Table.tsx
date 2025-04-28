import type { TableProps, TableHeaderItem } from "./Table.type";
import { joinClassNames } from "../Utils";

import TableHeadCell from "./TableHeadCell";
import TableCell from "./TableCell";
import { hasTotalFn } from "./utils";
import "./Table.css";

function toggleOrder(direction: string) {
  const sign = Number(`${direction}1`) * -1;
  return sign < 0 ? "-" : "+";
}

function isNotHiddenColumn(columnData: TableHeaderItem) {
  return columnData.isHidden == null || columnData.isHidden === false;
}

function Table({
  primaryKey,
  header = [],
  data = [],
  orderedColumn = "+id",
  className,
  onOrder = () => {},
  hideHeader = false,
}: TableProps) {
  const orderColumn = orderedColumn.substring(1);
  const orderDirection = orderedColumn.charAt(0) as "-" | "+"; // Явное указание типа

  const filteredHeader = header.filter(isNotHiddenColumn);

  return (
    <table className={joinClassNames(["table", className])}>
      {!hideHeader ? (
        <thead className={hideHeader ? "table--hide-head" : undefined}>
          <tr>
            {filteredHeader?.map((headCell) => (
              <TableHeadCell
                key={`head.${headCell.name}`}
                //  name={headCell.name}
                caption={headCell.displayName}
                isFilter={headCell.isFilter}
                isOrder={headCell.isOrder}
                orderDirection={orderColumn === headCell.name ? orderDirection : undefined}
                // filterValueTransformFn={headCell.filterValueTransformFn} 
                className={headCell.className}
                onOrder={() =>
                  onOrder(`${toggleOrder(orderDirection)}${headCell.name}`)
                }
              />
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {data.map((row, rowIndex) => {
          const rowKey = row.get(primaryKey as string)
            ? row.get(primaryKey as string)?.value
            : rowIndex;
          return (
            <tr key={rowKey} className="table__row">
              {filteredHeader?.map((column) => {
                const cell = row.get(column.name);
                return (
                  <TableCell
                    key={`${rowKey}.${column.name}.${cell?.value}`}
                    value={cell?.value}
                    renderFn={
                      cell?.cellRenderFn
                        ? cell.cellRenderFn
                        : column.cellRenderFn
                    }
                    className={cell?.className}
                    // rowValues={
                    //   new Map(
                    //     [...row].map(([key, valueObject]) => [
                    //       key,
                    //       valueObject.value,
                    //     ])
                    //   )
                    // }
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
      {hasTotalFn(filteredHeader) ? (
        <tfoot>
          <tr className="table__footer">
            {filteredHeader?.map((headerColumn) => (
              <td key={headerColumn.name} className="table__cell_foot">
                {headerColumn.totalFn != null
                  ? headerColumn.totalFn(
                      data.map((dataRow) => dataRow.get(headerColumn.name))
                    )
                  : null}
              </td>
            ))}
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
}

Table.defaultProps = {
  data: [],
  primaryKey: "id",
  orderedColumn: "+id",
  className: undefined,
  hideHeader: false,
  onOrder: () => {},
};

export default Table;