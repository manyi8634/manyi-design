import React from 'react';
import { Checkbox } from 'manyid';
import type { CheckboxChangeEvent } from 'manyid/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

export default App;
