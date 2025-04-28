import React from "react";


import type { SelectOutlineProps, SelectItem } from "./SelectOutline.type";
import { joinClassNames } from "../Utils";

import Spinner from "../Spinner/Spinner";

import ArrowDownIcon from "../SelectStatic/assets/ArrowDownIcon";
import ArrowUpIcon from "../SelectStatic/assets/ArrowUpIcon";

import "../index.css";
import "./SelectOutline.css";

function SelectOutline({
  className,
  disabled,
  error,
  options,
  selectedOption,
  handleSelect,
  isLoading,
  isRequired,
  label,
}: SelectOutlineProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const optionsRef = React.useRef<HTMLDivElement>(null);

  function setStateHandler() {
    if (!isLoading && !disabled) {
      setIsOpen((prev) => !prev);
    }
  }

  function close(e: React.FocusEvent) {
    if (!optionsRef.current || !optionsRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  }

  function onOptionClicked(option: SelectItem) {
    return () => {
      if (option.value && option.displayValue) {
        handleSelect!(option);
      }
      setIsOpen(false);
    };
  }

  return (
    <div className="select_container">
      <div
        className={joinClassNames([
          "select_outline",
          Boolean(error) && "status--error",
          disabled && "status--disabled",
          className,
        ])}
      >
        <div
          role="button"
          tabIndex={0}
          className="select_outline__selector"
          onClick={setStateHandler}
          onKeyDown={setStateHandler}
          onBlur={close}
        >
          {selectedOption ? (
            <span className="select_outline__value">
              {selectedOption!.displayValue}
            </span>
          ) : (
            <span className="select_outline__value"> </span>
          )}
          {isLoading ? (
            <div className="select_outline__spinner">
              <Spinner />
            </div>
          ) : (
            <div className="select_outline__arrow">
              {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </div>
          )}
        </div>
        {isOpen && (
          <div className="select_outline__options" ref={optionsRef}>
            {options?.map((item,index) => (
              <span
                role="button"
                tabIndex={0}
                key={index}
                className="select_outline__option"
                onClick={onOptionClicked(item)}
                onKeyDown={onOptionClicked(item)}
              >
                {item.displayValue}
              </span>
            ))}
          </div>
        )}
        <span
          className={joinClassNames([
            "select_outline__label",
            selectedOption !== null && "status--filled",
          ])}
        >
          <span>{label}</span>
          {isRequired && (
            <span className="select_outline__required_marker">*</span>
          )}
        </span>
      </div>
      <p className="select_outline__error">{error}</p>
    </div>
  );
}

SelectOutline.defaultProps = {
  className: "",
  disabled: false,
  error: "",
  isLoading: false,
  isRequired: false,
  label: "Label",
  handleSelect: () => {},
  options: [{ value: null, displayValue: "" }],
  selectedOption: null,
};

export default SelectOutline;
