import type { TextMarkerProps } from "./TextRadioGroup.type";
import { joinClassNames } from "../Utils";

function TextMarker({ checked, className, caption }: TextMarkerProps) {
  return (
    <span
      className={joinClassNames([
        "text_marker",
        className,
        { "text_marker--checked": checked },
      ])}
    >
      {caption}
    </span>
  );
}

TextMarker.defaultProps = {
  checked: false,
  className: undefined,
  caption: "Кнопка",
};

export default TextMarker;
