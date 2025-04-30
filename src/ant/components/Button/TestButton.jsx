import React from "react";
import { Button, ConfigProvider, Flex } from "antd";

const TestButton = () => {
  return (
    <ConfigProvider>
      <Flex vertical gap="small">
        <Flex gap="small" wrap>
          <Button color="default" variant="solid">
            Сплошной
          </Button>
          <Button color="default" variant="outlined">
            Очерченный
          </Button>
          <Button color="default" variant="dashed">
            Пунктирный
          </Button>
          <Button color="default" variant="filled">
            Полный
          </Button>
          <Button color="default" variant="text">
            Текст
          </Button>
          <Button color="default" variant="link">
            Ссылка
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="primary" variant="solid">
            Сплошной
          </Button>
          <Button color="primary" variant="outlined">
            Очерченный
          </Button>
          <Button color="primary" variant="dashed">
            Пунктирный
          </Button>
          <Button color="primary" variant="filled">
            Полный
          </Button>
          <Button color="primary" variant="text">
            Текст
          </Button>
          <Button color="primary" variant="link">
            Ссылка
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="danger" variant="solid">
            Сплошной
          </Button>
          <Button color="danger" variant="outlined">
            Очерченный
          </Button>
          <Button color="danger" variant="dashed">
            Пунктирный
          </Button>
          <Button color="danger" variant="filled">
            Полный
          </Button>
          <Button color="danger" variant="text">
            Текст
          </Button>
          <Button color="danger" variant="link">
            Ссылка
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="pink" variant="solid">
            Сплошной
          </Button>
          <Button color="pink" variant="outlined">
            Очерченный
          </Button>
          <Button color="pink" variant="dashed">
            Пунктирный
          </Button>
          <Button color="pink" variant="filled">
            Полный
          </Button>
          <Button color="pink" variant="text">
            Текст
          </Button>
          <Button color="pink" variant="link">
            Ссылка
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="purple" variant="solid">
            Сплошной
          </Button>
          <Button color="purple" variant="outlined">
            Очерченный
          </Button>
          <Button color="purple" variant="dashed">
            Пунктирный
          </Button>
          <Button color="purple" variant="filled">
            Полный
          </Button>
          <Button color="purple" variant="text">
            Текст
          </Button>
          <Button color="purple" variant="link">
            Ссылка
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="cyan" variant="solid">
            Сплошной
          </Button>
          <Button color="cyan" variant="outlined">
            Очерченный
          </Button>
          <Button color="cyan" variant="dashed">
            Пунктирный
          </Button>
          <Button color="cyan" variant="filled">
            Полный
          </Button>
          <Button color="cyan" variant="text">
            Текст
          </Button>
          <Button color="cyan" variant="link">
            Ссылка
          </Button>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};

export default TestButton;
