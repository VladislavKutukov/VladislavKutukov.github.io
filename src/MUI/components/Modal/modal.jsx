import React, { useState } from "react";
import { Box, Modal as MuiModal, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const MODAL_STATE = {
  IS_VIEW: "isView",
  IS_EDIT: "isEdit",
  OPENED: true,
  CLOSED: false,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

const Modal = ({
  isOpen = false,
  onClose = () => {},
  title,
  children,
  customSX = {},
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      slotProps={{
        backdrop: {
          style: {
            opacity: 0,
          },
        },
      }}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <Box sx={{ ...style, ...customSX }}>
        <Box
          component="div"
          position="sticky"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontSize: 18,
              fontWeight: 700,
            }}
            color="primary"
          >
            {title}
          </Box>
          <Box component="span">
            <IconButton onClick={handleClose}>
              <HighlightOffIcon />
            </IconButton>
          </Box>
        </Box>
        <Box component="div">{children}</Box>
      </Box>
    </MuiModal>
  );
};

export default Modal;