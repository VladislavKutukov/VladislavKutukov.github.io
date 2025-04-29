import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal from './modal';
import { Button } from '@mui/material';

export default {
  title: 'MUI/Modal',
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
          <p>Произвольный React-контент</p>
        </div>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Заголовок модалки',
};

export const LargeModal = Template.bind({});
LargeModal.args = {
  title: 'Большая модалка',
  customSX: {
    width: 800,
    height: 500,
  },
};

export const SmallModal = Template.bind({});
SmallModal.args = {
  title: 'Компактная модалка',
  customSX: {
    width: 400,
    p: 2,
  },
};