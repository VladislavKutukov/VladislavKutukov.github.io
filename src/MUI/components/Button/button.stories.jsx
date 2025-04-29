import React from "react";
import BasicButtons from "./button";

export default {
    title: "MUI/Кнопки",
    component: BasicButtons,
}

const Common = (args, text) => <BasicButtons />

export const CommonButton = Common.bind({})
