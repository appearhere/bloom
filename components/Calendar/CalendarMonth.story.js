import React, { PropTypes } from 'react';
import { storiesOf } from '@kadira/storybook';
import momentPropTypes from 'react-moment-proptypes';
import CalendarMonth from './CalendarMonth';
import CalendarItem from './CalendarItem';

const ExampleCalendarItem = (props) => {
  const { day, modifiers, ...rest } = props;

  const m = {
    ...modifiers,
    selected: day && day.date() % 2 === 0,
  };

  return <CalendarItem { ...rest } day={ day } modifiers={ m } />;
};

ExampleCalendarItem.propTypes = {
  isSelected: PropTypes.object,
  day: momentPropTypes.momentObj,
  modifiers: PropTypes.object,
};

storiesOf('CalendarMonth', module)
  .add('Default', () => (
    <CalendarMonth />
  ))
  .add('with external dates', () => (
    <CalendarMonth showOutOfRange />
  ))
  .add('with custom `DayComponent`', () => (
    <CalendarMonth
      DayComponent={ ExampleCalendarItem }
    />
  ))
  .add('with custom heading format', () => (
    <CalendarMonth
      columnHeadingProps={ {
        format: 'dddd',
      } }
    />
  ));
