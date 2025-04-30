import React from "react";
import Spinner from "./Spinner";

export default {
  title: "ECOPRO/Колесо загрузки",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const ПримерКолесаЗагрузки = Template.bind({});
ПримерКолесаЗагрузки.args = {
  className: "",
};
