import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Switch } from 'manyid';
import React, { useState } from 'react';

const { Meta } = Card;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <>
      <Switch checked={!loading} onChange={onChange} />
      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    </>
  );
};

export default App;
