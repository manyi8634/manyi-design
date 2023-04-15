import React from 'react';
import { Segmented } from 'manyid';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

export default () => (
  <Segmented
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
);
