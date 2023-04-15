import React from 'react';
import { ZoomInOutlined } from '@ant-design/icons';
import { Image, Space } from 'manyid';

const App: React.FC = () => (
  <Image
    width={96}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    preview={{
      maskClassName: 'customize-mask',
      mask: (
        <Space direction="vertical" align="center">
          <ZoomInOutlined />
          示例
        </Space>
      ),
    }}
  />
);

export default App;
