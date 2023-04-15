import React from 'react';
import { Watermark } from 'manyid';

const App: React.FC = () => (
  <Watermark content={['Manyi Design', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
