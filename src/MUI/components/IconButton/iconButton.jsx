import React from "react";
import { Tooltip, IconButton as MuiIconButton } from "@mui/material";

import Icon from "../Icon/icon";

const IconButton = ({ name, title, iconProps, ...props }) => {
  return (
    <Tooltip title={title}>
      <span>
        <MuiIconButton aria-label={title} {...props}>
          <Icon name={name} {...iconProps} />
        </MuiIconButton>
      </span>
    </Tooltip>
  );
};

IconButton.defaultProps = {
  onClick: () => {},
};

export default IconButton;
