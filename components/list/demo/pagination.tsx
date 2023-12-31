import { Avatar, List, Radio, Space } from 'manyid';
import React, { useState } from 'react';

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

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

const positionOptions = ['top', 'bottom', 'both'];

const alignOptions = ['start', 'center', 'end'];

const App: React.FC = () => {
  const [position, setPosition] = useState<PaginationPosition>('bottom');
  const [align, setAlign] = useState<PaginationAlign>('center');

  return (
    <>
      <Space direction="vertical" style={{ marginBottom: '20px' }} size="middle">
        <Space>
          <span>Pagination Position:</span>
          <Radio.Group
            optionType="button"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            {positionOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
        <Space>
          <span>Pagination Align:</span>
          <Radio.Group
            optionType="button"
            value={align}
            onChange={(e) => {
              setAlign(e.target.value);
            }}
          >
            {alignOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>
      <List
        pagination={{ position, align }}
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
    </>
  );
};

export default App;
