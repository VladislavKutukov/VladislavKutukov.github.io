import type { SpinnerProps } from "./Spinner.type";
import { joinClassNames } from "../Utils";

import "../index.css";
import "./Spinner.css";

function Spinner({ className }: SpinnerProps) {
  return (
    <div className={joinClassNames(["spinner", className])}>
      <div className="spinner__spin" />
    </div>
  );
}

Spinner.defaultProps = {
  className: undefined,
};

export default Spinner;
