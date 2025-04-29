import React from "react";
import { Tooltip, SvgIcon } from "@mui/material";

import Login from "@mui/icons-material/Login";
import HandshakeIcon from "@mui/icons-material/Handshake";

const iconTypes = {
  impersonate: Login,
  constractors: HandshakeIcon,
};

const Icon = ({ name, title, ...props }) => {
  const icon = iconTypes[name];
  return (
    <Tooltip title={title}>
      <SvgIcon
        {...props}
        sx={{
          ...props.sx,
          color:
            props.color &&
            typeof props.color === "string" &&
            props.color.startsWith("#")
              ? props.color
              : props?.sx?.color,
        }}
        component={icon}
        inheritViewBox
      />
    </Tooltip>
  );
};

export default Icon;
