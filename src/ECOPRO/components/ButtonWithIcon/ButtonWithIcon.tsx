import "./ButtonWithIcon.css";

import type { ButtonWithIconProps } from "./ButtonWithIcon.type";
import { Button } from "../Button";

import { joinClassNames } from "../Utils";
import Glyph from "../Glyph";

function ButtonWithIcon({
  className,
  primary,
  glyphNameLeft,
  glyphNameRight,
  children,
  onClick,
}: ButtonWithIconProps) {
  return (
    <Button
      className={joinClassNames([
        "button_with_icon",
        {
          "button_with_icon--left": glyphNameLeft != null,
          "button_with_icon--right": glyphNameRight != null,
          "button_with_icon--no_child": children == null,
        },
        className,
      ])}
   
      onClick={onClick}
    >
       <>
      {glyphNameLeft ? (
          <Glyph name="Cross" className="modal_window__button_glyph" />
      ) : null}
      {children}
      {glyphNameRight ? (
              <Glyph name="Cross" className="modal_window__button_glyph" />
      ) : null}</>
    </Button>
  );
}

ButtonWithIcon.defaultProps = {
  glyphLeft: undefined,
  glyphRight: undefined,
};

export default ButtonWithIcon;
