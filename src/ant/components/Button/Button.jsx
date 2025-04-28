// src/components/MyButton.jsx
import React from "react";
import { Button } from "antd";

const MyButton = ({ label, onClick }) => {
  return (
    <Button type="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default MyButton;
