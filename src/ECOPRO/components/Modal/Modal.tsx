import "./Modal.css";

import { useRef, useState, useMemo } from "react";
import reactDom from "react-dom";

import type { ModalProps, ModalAreaRef, ModalContextValue } from "./Modal.type";
import { joinClassNames } from "../Utils";

import { ModalContext } from "./ModalContext";
import ModalWindow from "./ModalWindow";

function Modal({ className, children, onModalClose = () => {} }: ModalProps) {
  const [isShown, setIsShown] = useState(true);
  const modalAreaRef: ModalAreaRef = useRef(
    document.querySelector("#root_modals")
  );
  const modalContextValue: ModalContextValue = useMemo(
    () => ({
      onClose: () => setIsShown(false),
    }),
    []
  );
  /** componentDidMount */
  // useEffect(() => {
  //   if (modalAreaRef.current == null) {
  //     modalAreaRef.current = document.createElement('div');
  //     modalAreaRef.current.classList.add('float_body');
  //     document.querySelector('body').appendChild(modalAreaRef.current);
  //   }
  // }, []);
  return reactDom.createPortal(
    <ModalContext.Provider value={modalContextValue}>
      <div
        className={joinClassNames([
          "modal",
          { "modal--hidden": !isShown },
          className,
        ])}
        onAnimationEnd={() => onModalClose()}
      >
        <ModalWindow isHidden={!isShown}>{children}</ModalWindow>
      </div>
    </ModalContext.Provider>,
    modalAreaRef.current!
  );
}

Modal.defaultProps = {
  className: undefined,
  children: undefined,
  onModalClose: () => {},
};

export default Modal;
