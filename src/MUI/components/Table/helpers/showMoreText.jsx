import { Tooltip } from "@mui/material";


export const isShowMoreText = (value) => {
  return typeof value === "string" || typeof value === "number";
};

const getDateWithDynamicEllipsis = (value, widthColumn) => {
  const textWidth = document
    .createElement("canvas")
    .getContext("2d")
    .measureText(value).width;
  if (textWidth <= widthColumn) {
    return true;
  }

  return false;
};

export const CustomShowMoreText = ({ value, expanded, widthColumn }) => {
  const renderValue = () => {
    if (expanded) return value;
    return getDateWithDynamicEllipsis(value, widthColumn) ? (
      value
    ) : (
      <Tooltip title={value}>
        <span>{`${String(value).substring(0, 17)}...`}</span>
      </Tooltip>
    );
  };
  return <>{renderValue()}</>;
};