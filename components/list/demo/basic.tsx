import { Avatar, List } from 'manyid';
import React from 'react';

const data = [
  {
    title: 'Manyi Design Title 1',
  },
  {
    title: 'Manyi Design Title 2',
  },
  {
    title: 'Manyi Design Title 3',
  },
  {
    title: 'Manyi Design Title 4',
  },
];

const App: React.FC = () => (
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
      </List.Item>
    )}
  />
);

export default App;
