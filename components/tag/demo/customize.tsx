import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Tag } from 'manyid';

const App: React.FC = () => (
  <>
    <Tag closable closeIcon="关 闭">
      Tag1
    </Tag>
    <Tag closable closeIcon={<CloseCircleOutlined />}>
      Tag2
    </Tag>
  </>
);

export default App;
