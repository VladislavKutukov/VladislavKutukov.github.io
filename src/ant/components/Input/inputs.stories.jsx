import React from "react";
import CommonInputs from "./input";
import WarnInputs from "./wawrnInputs";
import PasswordInput from "./passwordInput";
import NumberInput from "./numberInput";

export default {
  title: "antd/Строка Ввода",
  component: CommonInputs,
};

const CommonInputTemplate = (args) => <CommonInputs {...args} />;
const PasswordInputTemplate = (args) => <PasswordInput {...args} />;
const NumberInputTemplate = (args) => <NumberInput {...args} />;
const WarnInputsTemplate = (args) => <WarnInputs {...args} />;

export const СтандартныеСтрокиВвода = CommonInputTemplate.bind({});
export const СтрокиВводаДляПароля = PasswordInputTemplate.bind({});
export const СтрокиВводаДляЧисел = NumberInputTemplate.bind({});
export const ПредупрежденияСтрокВвода = WarnInputsTemplate.bind({});

const commonArgs = {
  border: "1px solid #f0f0f0",
  borderRadius: "20px",
  padding: "20px",
};

СтандартныеСтрокиВвода.args = commonArgs;
СтрокиВводаДляПароля.args = commonArgs;
СтрокиВводаДляЧисел.args = commonArgs;
ПредупрежденияСтрокВвода.args = commonArgs;
