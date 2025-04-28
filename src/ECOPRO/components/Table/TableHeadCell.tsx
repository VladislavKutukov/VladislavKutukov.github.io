import type { TableHeadCellProps, GlyphOrderClasses } from "./Table.type";
import Glyph from "../Glyph";
import { joinClassNames } from "../Utils";
import { JSX } from "react";

function TableHeadCell({
  caption,
  className,
  orderDirection,
  isFilter = false,
  isOrder = false,
  cellTagName = "th",
  onOrder = () => {},
}: TableHeadCellProps) {
  const glyphOrderClasses: GlyphOrderClasses = {
    "+": "order--asc",
    "-": "order--desc",
  };
  const Tag = cellTagName as keyof JSX.IntrinsicElements;
  return (
    <Tag className={joinClassNames(["table__header", className])}>
      <div className="table__header_wrapper">
        <button
          type="button"
          className="table__order_button"
          disabled={!isOrder}
          onClick={onOrder}
        >
          {caption}
        </button>
        {orderDirection ? (
          <Glyph
            className={`table__order_glyph ${glyphOrderClasses[orderDirection]}`}
            name="Chevron"
          />
        ) : null}
        {isFilter ? (
          <button type="button" className="table__header_button">
            <Glyph name="Filter" className="table__header_glyph" />
          </button>
        ) : null}
      </div>
    </Tag>
  );
}

TableHeadCell.defaultProps = {
  caption: "",
  className: undefined,
  orderDirection: undefined,
  isFilter: false,
  isOrder: false,
  cellTagName: "th",
  onOrder: () => {},
};

export default TableHeadCell;
