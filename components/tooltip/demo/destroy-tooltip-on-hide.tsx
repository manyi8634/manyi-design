import React from 'react';
import { Tooltip } from 'manyid';

const App: React.FC = () => (
  <Tooltip destroyTooltipOnHide title="prompt text">
    <span>Tooltip will destroy when hidden.</span>
  </Tooltip>
);

export default App;
