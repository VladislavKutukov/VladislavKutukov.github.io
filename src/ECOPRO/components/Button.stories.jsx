import { Button } from "./Button";
import { ButtonVariant } from "./Button.type";

export default {
  title: "ECOPRO/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: ButtonVariant.PRIMARY,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disabled: true,
  variant: ButtonVariant.PRIMARY,
};

export const Active = Template.bind({});
Active.args = {
  children: "Active Button",
  isActive: true,
  variant: ButtonVariant.PRIMARY,
};
