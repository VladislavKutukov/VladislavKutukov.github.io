import { useContext } from "react";
import type { ModalWindowProps } from "./Modal.type";
import { joinClassNames } from "../Utils";
import { ModalContext } from "./ModalContext";
import Glyph from "../Glyph";

function ModalWindow({
  className,
  children,
  isHidden = false,
}: ModalWindowProps) {
  const modalContext = useContext(ModalContext);
  return (
    <div
      className={joinClassNames([
        "modal_window",
        { "modal_window--hidden": isHidden },
        className,
      ])}
    >
      <div className="modal_window__header">
        <button
          type="button"
          className="modal_window__close_button"
          onClick={() => modalContext.onClose!()}
        >
          <Glyph name="Cross" className="modal_window__button_glyph" />
        </button>
      </div>
      {children}
    </div>
  );
}

ModalWindow.defaultProps = {
  className: undefined,
  children: undefined,
};

export default ModalWindow;
