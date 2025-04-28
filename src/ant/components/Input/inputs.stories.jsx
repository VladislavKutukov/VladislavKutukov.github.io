import React from "react";
import CommonInputs from "./input";
import WarnInputs from "./wawrnInputs";
import PasswordInput from "./passwordInput";
import NumberInput from "./numberInput";

export default {
    title: "Example/antd/Input",
    component: CommonInputs, 
  }
  
  const CommonInputTemplate = (args) => <CommonInputs {...args} />;
  const PasswordInputTemplate = (args) => <PasswordInput {...args} />;
  const NumberInputTemplate = (args) => <NumberInput {...args} />;
  const WarnInputsTemplate = (args) => <WarnInputs {...args} />;
  
  export const Common = CommonInputTemplate.bind({});
  export const Password = PasswordInputTemplate.bind({});
  export const Number = NumberInputTemplate.bind({});
  export const Warn = WarnInputsTemplate.bind({});
  
  const commonArgs = {
    border: "1px solid #f0f0f0",
    borderRadius: "20px",
    padding: "20px",
  };
  
  Common.args = commonArgs;
  Password.args = commonArgs;
  Number.args = commonArgs;
  Warn.args = commonArgs;