import { useRef } from "react";

import type { ToastProps } from "./Notification.type";
import MarkError from "./MarkError";
import MarkSuccess from "./MarkSuccess";
import MarkWarning from "./MarkWarning";
import Glyph from "../Glyph";
import { joinClassNames } from "../Utils";
import { Button } from '../Button';

const MARKS = {
  error: MarkError,
  success: MarkSuccess,
  warning: MarkWarning,
};

const TOAST_STYLES = {
  error: "toast--error",
  success: "toast--success",
  warning: "toast--warning",
};

function Toast({ message, type, messageId, onClose = () => {} }: ToastProps) {
  const Icon = MARKS[type];
  const toastRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={toastRef}
      className={joinClassNames(["toast", TOAST_STYLES[type]])}
      onAnimationEnd={(e) => {
        if ((e.target as HTMLDivElement).classList.contains("toast--close"))
          onClose(messageId);
      }}
    >
      <div className="toast__mark_area">
        <Icon className="toast__icon" />
      </div>
      <div className="toast__message">{message}</div>
      <Button
     
        className="toast__close_button"
        onClick={() => toastRef.current!.classList.add("toast--close")}
      >
        <Glyph name="Cross" />
      </Button>
    </div>
  );
}

Toast.defaultProps = {
  message: "",
  type: "success",
  onClose: () => {},
};

export default Toast;
