import { Button } from "./Button";
import { ButtonVariant } from "./Button.type";

export default {
  title: "ECOPRO/Обычные Кнопки",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Основная = Template.bind({});
Основная.args = {
  children: "Добавить",
  variant: ButtonVariant.PRIMARY,
};

export const Отключенная = Template.bind({});
Отключенная.args = {
  children: "Добавить",
  disabled: true,
  variant: ButtonVariant.PRIMARY,
};

export const Активная = Template.bind({});
Активная.args = {
  children: "Добавить",
  isActive: true,
  variant: ButtonVariant.PRIMARY,
};
