import type { InputStaticProps } from "./InputStatic.type";
import { joinClassNames } from "../Utils";

import "../index.css";
import "./InputStatic.css";

function InputStatic({
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
  placeholder,
  type,
  value,
}: InputStaticProps) {
  return (
    <div
      className={joinClassNames([
        "input_static",
        Boolean(error) && "status--error",
        disabled && "status--disabled",
        className,
      ])}
    >
      {Boolean(label) && (
        <label className="input_static__label" htmlFor={name}>
          <span>{label}</span>
          {isRequired && (
            <span className="input_static__required_marker">*</span>
          )}
        </label>
      )}
      <div className="input_static__input">
        <input
          tabIndex={0}
          name={name}
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
        />
        {Boolean(glyph) && !onGlyphClick && (
          <div className="input_static__icon">{glyph!()}</div>
        )}
        {Boolean(glyph) && Boolean(onGlyphClick) && (
          <button
            type="button"
            className="input_static__icon input_static__button"
            onClick={onGlyphClick}
          >
            {glyph!()}
          </button>
        )}
      </div>
      <p className="input_static__error">{error}</p>
    </div>
  );
}

InputStatic.defaultProps = {
  autoComplete: "on",
  className: "",
  disabled: false,
  error: "",
  glyph: null,
  isRequired: false,
  label: "",
  name: "InitialName",
  onChange: () => {},
  onGlyphClick: null,
  placeholder: "",
  type: "text",
};

export default InputStatic;
