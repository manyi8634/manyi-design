import React from 'react';
import { ConfigProvider, InputNumber, Space } from 'manyid';

export default () => (
  <ConfigProvider
    theme={{
      components: {
        InputNumber: {
          handleWidth: 50,
        },
      },
    }}
  >
    <Space>
      <InputNumber />

      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              handleWidth: 25,
            },
          },
        }}
      >
        <InputNumber />
      </ConfigProvider>
    </Space>
  </ConfigProvider>
);
