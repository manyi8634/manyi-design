import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'manyid';

const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
  >
    <a href="#">Delete</a>
  </Popconfirm>
);

export default App;
