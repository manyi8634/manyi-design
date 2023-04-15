import { Button, Tooltip } from 'manyid';
import React from 'react';

const App: React.FC = () => (
  <Tooltip
    open
    title="Thanks for using manyid. Have a nice day!"
    arrow={{ pointAtCenter: true }}
    placement="topLeft"
  >
    <Button>Point at center</Button>
  </Tooltip>
);

export default App;
