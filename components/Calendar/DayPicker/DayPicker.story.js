import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import moment from 'moment';
import DayPicker from './DayPicker';
import { defaultDayState } from './DayPickerItem';

class StateManagedDayPicker extends Component {
  state = {
    date: '',
    month: moment(),
  };

  getDayState = (day) => {
    const { date } = this.state;
    return Object.assign({}, defaultDayState, {
      isSelected: day && date && day.isSame(date, 'day'),
      isFirstSelected: day && date && day.isSame(date, 'day'),
      isLastSelected: day && date && day.isSame(date, 'day'),
    });
  };

  handleInteraction = (e, date) => {
    this.setState({ date });
  };

  handleMonthChange = (_, month) => {
    this.setState({ month });
  };

  render() {
    const { month } = this.state;

    return (
      <div>
        <DayPicker
          {...this.props}
          month={month}
          onInteraction={this.handleInteraction}
          onMonthChange={this.handleMonthChange}
          dayProps={{
            getDayState: this.getDayState,
          }}
        />
      </div>
    );
  }
}

const stories = storiesOf('DayPicker', module);
stories.addDecorator(withKnobs);

const today = moment();

stories
  .add('Single date selected', () => (
    <DayPicker
      dayProps={{
        getDayState: d => Object.assign({}, defaultDayState, {
          isSelected: d && d.isSame(moment(), 'day'),
          isFirstSelected: d && d.isSame(moment(), 'day'),
          isLastSelected: d && d.isSame(moment(), 'day'),
        }),
      }}
      month={moment().month(4)}
    />
  ))
  .add('Multiple dates selected', () => (
    <DayPicker
      dayProps={{
        getDayState: (d) => {
          const startDate = moment().add(-5, 'day');
          const endDate = moment().add(5, 'day');

          return Object.assign({}, defaultDayState, {
            isSelected: d && d.isAfter(startDate, 'day') && d.isBefore(endDate, 'day'),
            isFirstSelected: d && d.isSame(startDate, 'day'),
            isLastSelected: d && d.isSame(endDate, 'day'),
          });
        },
      }}
      month={moment({ month: number('month', today.month()) })}
    />
  ))
  .add('Interactive', () => (
    <StateManagedDayPicker />
  ));
