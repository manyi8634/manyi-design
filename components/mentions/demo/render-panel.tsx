import React from 'react';
import { Mentions } from 'manyid';

const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;

const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];

const App: React.FC = () => (
  <InternalMentions style={{ width: '100%' }} value="@" options={options} />
);

export default App;
