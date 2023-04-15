import React, { useState } from 'react';
import type { QRCodeProps } from 'manyid';
import { Segmented, QRCode } from 'manyid';

const App: React.FC = () => {
  const [level, setLevel] = useState<string | number>('L');
  return (
    <>
      <QRCode
        style={{ marginBottom: 16 }}
        errorLevel={level as QRCodeProps['errorLevel']}
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <Segmented options={['L', 'M', 'Q', 'H']} value={level} onChange={setLevel} />
    </>
  );
};

export default App;
