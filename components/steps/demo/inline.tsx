import type { StepsProps } from 'manyid';
import { Avatar, List, Steps } from 'manyid';
import React from 'react';

const data = [
  {
    title: 'Manyi Design Title 1',
    current: 0,
  },
  {
    title: 'Manyi Design Title 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Manyi Design Title 3',
    current: 2,
  },
  {
    title: 'Manyi Design Title 4',
    current: 1,
  },
];

const items = [
  {
    title: 'Step 1',
    description: 'This is a Step 1.',
  },
  {
    title: 'Step 2',
    description: 'This is a Step 2.',
  },
  {
    title: 'Step 3',
    description: 'This is a Step 3.',
  },
];

const App: React.FC = () => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Manyi Design, a design language for background applications, is refined by Ant UED Team"
          />
          <Steps
            style={{ marginTop: 8 }}
            type="inline"
            current={item.current}
            status={item.status as StepsProps['status']}
            items={items}
          />
        </List.Item>
      )}
    />
  </div>
);

export default App;
