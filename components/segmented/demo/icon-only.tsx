import React from 'react';
import { Segmented } from 'manyid';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

export default () => (
  <Segmented
    options={[
      {
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);
