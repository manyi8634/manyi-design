import { Button, Tooltip } from 'manyid';
import React from 'react';

const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);

  return (
    <div>
      <div
        style={{
          width: '300vw',
          height: '300vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Tooltip title="Thanks for using manyid. Have a nice day!" open>
          <Button>Scroll The Window</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default App;
