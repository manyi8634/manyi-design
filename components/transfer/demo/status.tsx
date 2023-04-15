import React from 'react';
import { Space, Transfer } from 'manyid';

const App: React.FC = () => (
  <Space direction="vertical">
    <Transfer status="error" />
    <Transfer status="warning" showSearch />
  </Space>
);

export default App;
