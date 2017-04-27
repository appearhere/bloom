import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';
import moment from 'moment';
import DayPicker, { getDates } from './DayPicker';

class StateManagedDayPicker extends Component {
  state = {
    date: '',
    month: moment(),
  };

  handleInteraction = (e, date) => {
    this.setState({ date });
  };

  handleMonthChange = (_, month) => {
    this.setState({ month });
  };

  render() {
    const { date, month } = this.state;

    return (
      <div>
        <DayPicker
          { ...this.props }
          month={ month }
          onInteraction={ this.handleInteraction }
          onMonthChange={ this.handleMonthChange }
          selectedDates={ getDates(date) }
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
      selectedDates={ getDates(moment()) }
      month={ moment({ month: number('month', today.month()) }) }
    />
  ))
  .add('Multiple dates selected', () => (
    <DayPicker
      selectedDates={ getDates(moment(), moment().add(5, 'day')) }
      month={ moment({ month: number('month', today.month()) }) }
    />
  ))
  .add('Single date highlighted', () => (
    <DayPicker
      highlightedDates={ getDates(moment()) }
      month={ moment({ month: number('month', today.month()) }) }
    />
  ))
  .add('Multiple dates highlighted', () => (
    <DayPicker
      highlightedDates={ getDates(moment(), moment().add(5, 'day')) }
      month={ moment({ month: number('month', today.month()) }) }
    />
  ))
  .add('Interactive', () => (
    <StateManagedDayPicker />
  ));