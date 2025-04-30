import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormExample = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
      <Form.Item label="Стиль формы" name="variant">
        <Segmented options={['Контурный', 'Заливка', 'Без рамки', 'Подчёркнутый']} />
      </Form.Item>

      <Form.Item label="Поле ввода" name="Input" rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Числовое поле"
        name="InputNumber"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Текстовая область"
        name="TextArea"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Упоминания"
        name="Mentions"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <Mentions />
      </Form.Item>

      <Form.Item
        label="Выпадающий список"
        name="Select"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <Select />
      </Form.Item>

      <Form.Item
        label="Каскадный список"
        name="Cascader"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <Cascader />
      </Form.Item>

      <Form.Item
        label="Древовидный список"
        name="TreeSelect"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <TreeSelect />
      </Form.Item>

      <Form.Item
        label="Выбор даты"
        name="DatePicker"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Диапазон дат"
        name="RangePicker"
        rules={[{ required: true, message: 'Пожалуйста, заполните!' }]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormExample;