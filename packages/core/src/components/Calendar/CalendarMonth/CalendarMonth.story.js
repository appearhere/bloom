import React from 'react';
import { storiesOf } from '@storybook/react';
import CalendarMonth from './CalendarMonth';

storiesOf('CalendarMonth', module)
  .add('Default', () => <CalendarMonth />)
  .add('with external dates', () => <CalendarMonth showOutOfRange />)
  .add('with custom heading format', () => (
    <CalendarMonth
      columnHeadingProps={{
        format: 'dddd',
      }}
    />
  ));
