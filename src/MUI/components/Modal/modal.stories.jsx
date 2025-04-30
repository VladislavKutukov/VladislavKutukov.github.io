import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './modal';
import { Button } from '@mui/material';

export default {
  title: 'MUI/Модальное окно',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: { disable: true },
    options: { showPanel: false },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => setIsOpen(true)}
        sx={{ mb: 2 }}
      >
        Открыть модальное окно
      </Button>

      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div style={{ padding: '20px', minHeight: '200px' }}>
          <p>Содержимое модального окна</p>
          <p>Произвольный контент</p>
        </div>
      </Modal>
    </div>
  );
};

export const Стандартная = Template.bind({});
Стандартная.args = {
  title: 'Стандартное модальное окно',
};

export const Большая = Template.bind({});
Большая.args = {
  title: 'Модальное окно большого размера',
  customSX: {
    width: 800,
    height: 500,
  },
};

export const Компактная = Template.bind({});
Компактная.args = {
  title: 'Компактное модальное окно',
  customSX: {
    width: 400,
    p: 2,
  },
};