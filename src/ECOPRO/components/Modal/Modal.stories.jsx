import React from "react";
import ModalWindow from "./ModalWindow";
import { ModalContext } from "./ModalContext";

export default {
  title: "Components/ModalWindow",
  component: ModalWindow,
};

const Template = (args) => {
  const modalCloseHandler = () => {
    alert("Modal closed!"); // Для примера, можно изменить на более подходящее поведение
  };

  return (
    <ModalContext.Provider value={{ onClose: modalCloseHandler }}>
      <ModalWindow {...args} />
    </ModalContext.Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  isHidden: false,
  children: <div>Здесь содержимое модального окна</div>,
};

export const Hidden = Template.bind({});
Hidden.args = {
  isHidden: true,
  children: <div>Закрытое содержимое модального окна</div>,
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  isHidden: false,
  children: <div>С модальным окном с настраиваемым классом</div>,
};
