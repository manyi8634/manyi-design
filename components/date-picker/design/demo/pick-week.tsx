import type { FC } from 'react';
import React from 'react';
import { DatePicker } from 'manyid';

const { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;

const Demo: FC = () => <PureDatePicker picker="week" />;

export default Demo;
