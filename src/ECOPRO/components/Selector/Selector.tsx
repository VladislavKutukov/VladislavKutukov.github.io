import type { SelectorProps } from "./Selector.type";
import { joinClassNames } from "../Utils";
import "./Selector.css";

function Selector({
  items,
  selectedItem ,
  className,
  onChange = () => {},
}: SelectorProps) {
  return (
    <select
      className={joinClassNames(["selector", className])}
      onChange={onChange}
      value={selectedItem?.value}
    >
      {items!.map(({ value, displayValue }) => (
        <option key={value} value={value}>
          {displayValue}
        </option>
      ))}
    </select>
  );
}

Selector.defaultProps = {
  items: [],
  selectedItem: undefined,
  className: undefined,
  onChange: () => {},
};

export default Selector;
