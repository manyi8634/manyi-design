import React from 'react';
import { Button, notification } from 'manyid';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const App: React.FC = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);

export default App;
