import React from 'react';
import { Collapse } from 'manyid';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <Collapse defaultActiveKey="1">
          <Panel header="This is panel nest panel" key="1">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default App;
