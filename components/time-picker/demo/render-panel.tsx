import React from 'react';
import { TimePicker } from 'manyid';

const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;

const App: React.FC = () => <InternalTimePicker />;

export default App;
