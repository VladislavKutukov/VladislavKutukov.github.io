import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Открыть модальное окно
      </Button>
      <Modal
        title="Создание"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Окно подтверждения действий на странице "Паспорт работ"</p>
      </Modal>
    </>
  );
};

export default ModalForm;
