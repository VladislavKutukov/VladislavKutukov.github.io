import React, { useMemo } from "react";
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';

const Context = React.createContext({ name: 'Default' });

const Уведомления = () => {
  const [api, contextHolder] = notification.useNotification();

  const открытьУведомление = (placement) => {
    api.info({
      message: `Уведомление`,
      description: <Context.Consumer>{() => `Ваша заявка успешно сформирована в системе!`}</Context.Consumer>,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => открытьУведомление('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          Сверху слева
        </Button>
        <Button
          type="primary"
          onClick={() => открытьУведомление('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          Сверху справа
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => открытьУведомление('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          Снизу слева
        </Button>
        <Button
          type="primary"
          onClick={() => открытьУведомление('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          Снизу справа
        </Button>
      </Space>
    </Context.Provider>
  );
};

export default Уведомления;
