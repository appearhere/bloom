import React, { Component, PropTypes } from 'react';
import keyMirror from 'key-mirror';
import momentPropTypes from 'react-moment-proptypes';

import noop from '../../../utils/noop';
import DayPicker, { getDates } from '../DayPicker/DayPicker';

export const SELECT_DATE = keyMirror({
  START: null,
  END: null,
});

export default class DayRangePicker extends Component {
  static propTypes = {
    startDate: momentPropTypes.momentObj,
    endDate: momentPropTypes.momentObj,
    selectDate: PropTypes.oneOf([SELECT_DATE.START, SELECT_DATE.END]),
    onInteraction: PropTypes.func,
    onMonthChange: PropTypes.func,
  };

  static defaultProps = {
    startDate: null,
    endDate: null,
    selectDate: SELECT_DATE.START,
    onInteraction: noop,
    onMonthChange: noop,
  };

  state = {
    endHighlight: null,
  };

  handleInteraction = (e, date) => {
    const { startDate, endDate, selectDate, onInteraction } = this.props;

    if (selectDate === SELECT_DATE.START) {
      onInteraction(e, date, endDate);
    } else if (selectDate === SELECT_DATE.END) {
      if (
        (startDate && endDate && date.isSame(endDate)) ||
        (startDate && date.isBefore(startDate))
      ) {
        onInteraction(e, date, null);
      } else {
        onInteraction(e, startDate, date);
      }
    }
  };

  handleHighlight = (e, date) => {
    this.setState((currentState, props) => {
      if (props.startDate && props.endDate) {
        return {
          endHighlight: null,
        };
      }

      if (props.startDate && !props.endDate) {
        return {
          endHighlight: date,
        };
      }


      return null;
    });
  };

  render() {
    const { endHighlight } = this.state;
    const { startDate, endDate, onMonthChange, ...rest } = this.props;
    const selectedDates = getDates(startDate, endDate);
    const highlightedDates = startDate && endHighlight
      ? getDates(startDate, endHighlight)
      : [];

    return (
      <DayPicker
        { ...rest }
        selectedDates={ selectedDates }
        highlightedDates={ highlightedDates }
        onInteraction={ this.handleInteraction }
        onHighlight={ this.handleHighlight }
        onMonthChange={ onMonthChange }
      />
    );
  }
}