import React from 'react';
import { Calendar } from 'manyid';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'manyid/es/calendar/generateCalendar';

const App: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return <Calendar onPanelChange={onPanelChange} />;
};

export default App;
