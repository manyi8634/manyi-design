import React from 'react';
import { Typography } from 'manyid';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title>h1. Manyi Design</Title>
    <Title level={2}>h2. Manyi Design</Title>
    <Title level={3}>h3. Manyi Design</Title>
    <Title level={4}>h4. Manyi Design</Title>
    <Title level={5}>h5. Manyi Design</Title>
  </>
);

export default App;
