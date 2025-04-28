import type { InputOutlineProps } from "./InputOutline.type";
import { joinClassNames } from "../Utils";

import "../index.css";
import "./InputOutline.css";

function InputOutline({
  autoComplete,
  className,
  disabled,
  error,
  glyph,
  isRequired,
  label,
  name,
  onChange,
  onGlyphClick,
  onBlur,
  type,
  value,
}: InputOutlineProps) {
  return (
    <div
      className={joinClassNames([
        "input_outline",
        Boolean(error) && "status--error",
        disabled && "status--disabled",
        className,
      ])}
    >
      <div className="input_outline__input">
        <input
          tabIndex={0}
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder=" "
          autoComplete={autoComplete}
          disabled={disabled}
          onBlur={onBlur}
        />
        <label className="input_outline__label" htmlFor={name}>
          <span>{label}</span>
          {isRequired && (
            <span className="input_outline__required_marker">*</span>
          )}
        </label>
        {Boolean(glyph) && !onGlyphClick && (
          <div className="input_outline__icon">{glyph!()}</div>
        )}
        {Boolean(glyph) && Boolean(onGlyphClick) && (
          <button
            type="button"
            className="input_outline__icon input_outline__button"
            onClick={onGlyphClick}
          >
            {glyph!()}
          </button>
        )}
      </div>
      <p className="input_outline__error">{error}</p>
    </div>
  );
}

InputOutline.defaultProps = {
  autoComplete: "on",
  className: "",
  disabled: false,
  error: "",
  glyph: null,
  isRequired: false,
  label: "",
  name: "InitialName",
  onChange: () => {},
  onBlur: () => {},
  onGlyphClick: null,
  type: "text",
};

export default InputOutline;
