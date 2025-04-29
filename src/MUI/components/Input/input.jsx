import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/styles";

export const LIGHT_THEME = "light";

const Input = ({
  label,
  placeholder,
  input,
  meta: { touched, invalid, error, submitError } = {
    touched: false,
    invalid: false,
    error: "",
  },
  ...custom
}) => (
  <StyledTextField
    label={label}
    placeholder={placeholder}
    error={touched && invalid}
    helperText={touched && (error || submitError)}
    {...input}
    InputLabelProps={{
      shrink: true,
    }}
    {...custom}
    InputProps={{
      ...custom.InputProps,
    }}
  />
);

export function inputStyles({ theme }) {
  const paddingContent = "10px";
  const inputLabelColor ="#004E9E";
  const inputLabelDisabledColor ="#868686";
  const inputTextDisabledColor ="#b1b1b1";
  const inputBorderColor ="#D3D3D3" ;
  const inputBorderFocusedColor ="#004E9E" ;
  return {
    fontFamily: "'Helvetica', sans-serif",
    "& .MuiInputLabel-outlined": {
      fontSize: "16px",
      lineHeight: "18px",
      height: "18px",
      fontWeight: 700,
      color: inputLabelColor,
      maxWidth: "calc(100% - 30px)",
      transform: "translate(15px, 18px) scale(1)",
      "&.MuiInputLabel-sizeSmall": {
        fontSize: "14px",
        lineHeight: "16px",
        height: "16px",
        transform: "translate(15px, 12px) scale(1)",
      },
      "&.Mui-focused": {
        color: inputLabelColor,
        transform: "translate(15px, -9px) scale(1)",
      },
      "&.MuiInputLabel-shrink": {
        color: inputLabelColor,
        transform: "translate(15px, -9px) scale(1)",
      },
      "&.Mui-error": {
        color: "#EF4444",
      },
      "&.Mui-disabled": {
        color: inputLabelDisabledColor,
      },
    },
    "& .MuiInputBase-adornedStart": {
      fontSize: "16px",
      paddingLeft: "10px",
      "& .MuiInputBase-input": {
        paddingLeft: "10px",
        "&.MuiInputBase-inputSizeSmall": {
          paddingLeft: "10px",
        },
      },
      "&.MuiInputBase-sizeSmall": {
        fontSize: "13px",
      },
    },
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: inputTextDisabledColor,
    },
    "& .MuiInputBase-adornedEnd": {
      fontSize: "16px",
      paddingRight: "10px",
      "& .MuiInputBase-input": {
        paddingRight: "10px",
        "&.MuiInputBase-inputSizeSmall": {
          paddingRight: "10px",
        },
      },
      "&.MuiInputBase-sizeSmall": {
        fontSize: "13px",
      },
    },
    "& .MuiInputAdornment-root": {
      margin: `0 ${paddingContent}`,
      "& .MuiButtonBase-root": {
        fontSize: "16px",
        "& > svg ": {
          fontSize: "1.5em",
        },
      },
      "&.MuiInputAdornment-sizeSmall": {
        "& .MuiButtonBase-root": {
          fontSize: "12px",
          padding: "4px",
        },
      },
    },
    "& .MuiInputBase-input": {
      fontFamily: "'Helvetica', sans-serif",
      padding: `19.5px ${paddingContent}`,
      fontSize: "14px",
      lineHeight: "16px",
      height: "16px",
      fontWeight: 400,

      "&.MuiInputBase-inputSizeSmall": {
        fontSize: "12px",
        lineHeight: "20px",
        height: "13px",
        padding: `13.5px ${paddingContent}`,
      },
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: `2px solid ${inputBorderColor}`,
      "&:hover": {
        border: `2px solid ${inputBorderColor}`,
      },
      "& legend": {
        fontSize: "16px",
        fontWeight: 700,
      },
    },
    "& .MuiOutlinedInput-root": {
      "& svg": {
        height: "1em",
        width: "1em",
      },
      "&.MuiInputBase-adornedStart": {
        "& > svg ": {
          fontSize: "1.5em",
        },
      },
      "&.MuiInputBase-adornedEnd": {
        "& > svg ": {
          fontSize: "1.5em",
        },
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: `2px solid ${inputBorderColor}`,
      },
      "&.MuiInputBase-sizeSmall": {
        "& legend": {
          fontSize: "14px",
        },
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          border: `2px solid ${inputBorderFocusedColor}`,
          "& legend": {
            maxWidth: "100%",
          },
        },
      },
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          border: `2px solid ${inputBorderColor}`,
        },
      },
    },
  };
}

const StyledTextField = styled(TextField)(inputStyles);

export default Input;
