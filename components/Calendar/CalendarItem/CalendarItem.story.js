import React from 'react';
import { storiesOf } from '@storybook/react';
import CalendarItem from './CalendarItem';

storiesOf('CalendarItem', module)
  .add('Default ', () => (
    <CalendarItem />
  ))
  .add('Empty ', () => (
    <CalendarItem day={null} />
  ))
  .add('With builtin `selected` modifier', () => (
    <CalendarItem
      modifiers={{
        selected: true,
      }}
    />
  ))
  .add('With builtin `today` modifier', () => (
    <CalendarItem
      modifiers={{
        today: true,
      }}
    />
  ))
  .add('With non-default formatting', () => (
    <CalendarItem
      format="MMM"
    />
  ));
