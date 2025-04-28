import type { TextboxProps } from "./Textbox.type";
import { joinClassNames } from "../Utils";

import "./Textbox.css";

function Textbox({
  className,
  value,
  defaultValue,
  type,
  list,
  min,
  onChange,
  onBlur,
  disabled = false,
}: TextboxProps) {
  return (
    <input
      className={joinClassNames(["textbox", className])}
      type={type}
      list={list}
      value={value}
      min={min}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
}

Textbox.defaultProps = {
  className: undefined,
  value: undefined,
  defaultValue: undefined,
  list: undefined,
  type: "text",
  disabled: false,
  onChange: undefined,
  onBlur: undefined,
  min: undefined,
};

export default Textbox;
