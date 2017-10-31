import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import moment from 'moment';

import DayRangePicker, { SELECT_DATE } from './DayRangePicker';

const stories = storiesOf('DayRangePicker', module);
stories.addDecorator(withKnobs);

class StateManagedDayRangePicker extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    selectDate: SELECT_DATE.START,
    month: moment(),
  };

  handleInteraction = (e, startDate, endDate) => {
    this.setState({
      startDate,
      endDate,
      selectDate: SELECT_DATE.END,
    });
  };

  handleMonthChange = (_, month) => {
    this.setState({ month });
  };

  render() {
    const { startDate, endDate, selectDate, month } = this.state;

    return (
      <DayRangePicker
        startDate={ startDate }
        endDate={ endDate }
        selectDate={ selectDate }
        month={ month }
        onInteraction={ this.handleInteraction }
        onMonthChange={ this.handleMonthChange }
      />
    );
  }
}

stories.add('Managed', () => (
  <StateManagedDayRangePicker />
));
