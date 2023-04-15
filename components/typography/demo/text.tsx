import React from 'react';
import { Space, Typography } from 'manyid';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>Manyi Design (default)</Text>
    <Text type="secondary">Manyi Design (secondary)</Text>
    <Text type="success">Manyi Design (success)</Text>
    <Text type="warning">Manyi Design (warning)</Text>
    <Text type="danger">Manyi Design (danger)</Text>
    <Text disabled>Manyi Design (disabled)</Text>
    <Text mark>Manyi Design (mark)</Text>
    <Text code>Manyi Design (code)</Text>
    <Text keyboard>Manyi Design (keyboard)</Text>
    <Text underline>Manyi Design (underline)</Text>
    <Text delete>Manyi Design (delete)</Text>
    <Text strong>Manyi Design (strong)</Text>
    <Text italic>Manyi Design (italic)</Text>
    <Link href="https://ant.design" target="_blank">
      Manyi Design (Link)
    </Link>
  </Space>
);

export default App;
