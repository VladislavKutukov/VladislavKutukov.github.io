import "./TextRadioGroup.css";

import type { TextRadioGroupProps } from "./TextRadioGroup.type";

import Switcher from "../Switcher";
import { joinClassNames } from "../Utils";

function TextRadioGroup({
  className,
  selectedItem ,
  items,
  groupName,
  onSelect = () => {},
}: TextRadioGroupProps) {
  return (
    <div className={joinClassNames(["text_radio_group", className])}>
      {items.map((item) => (
        <Switcher
          key={item.value}
          name={groupName}
          className="text_radio_group__switcher"
          checked={selectedItem?.value === item.value}
          onChange={() => onSelect(item)}
        />
      ))}
    </div>
  );
}

TextRadioGroup.defaultProps = {
  items: [],
  selectedItem: undefined,
  className: undefined,
  onSelect: () => {},
};

export default TextRadioGroup;
