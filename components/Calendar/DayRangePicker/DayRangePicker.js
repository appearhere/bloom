import React, { Component, PropTypes } from 'react';
import keyMirror from 'key-mirror';
import momentPropTypes from 'react-moment-proptypes';

import noop from '../../../utils/noop';
import DayPicker from '../DayPicker/DayPicker';
import { defaultDayState } from '../DayPicker/DayPickerItem';

export const SELECT_DATE = keyMirror({
  START: null,
  END: null,
});

export const dayInRange = (day, startDate, endDate) => {
  if (!day) return false;

  const isEqualToStart = day.isSame(startDate, 'day');
  const isEqualToEnd = day.isSame(endDate, 'day');
  const isAfterStart = day.isAfter(startDate, 'day');
  const isBeforeEnd = day.isBefore(endDate, 'day');

  const isEqualToOrAfterStart = isEqualToStart || isAfterStart;
  const isEqualToOrAfterEnd = isEqualToEnd || isBeforeEnd;

  return isEqualToOrAfterStart && isEqualToOrAfterEnd;
};

const defaultIsDisabledDay = () => false;

export default class DayRangePicker extends Component {
  static propTypes = {
    startDate: momentPropTypes.momentObj,
    endDate: momentPropTypes.momentObj,
    selectDate: PropTypes.oneOf([SELECT_DATE.START, SELECT_DATE.END]),
    onInteraction: PropTypes.func,
    onMonthChange: PropTypes.func,
    isDisabled: PropTypes.func,
  };

  static defaultProps = {
    startDate: null,
    endDate: null,
    selectDate: SELECT_DATE.START,
    onInteraction: noop,
    onMonthChange: noop,
    isDisabled: defaultIsDisabledDay,
  };

  state = {
    endHighlight: null,
  };

  getDayState = (day) => {
    const { startDate, endDate, isDisabled } = this.props;
    const { endHighlight } = this.state;

    if (!day) return defaultDayState;

    return {
      isDisabled: isDisabled(day),
      isSelected: dayInRange(day, startDate, endDate),
      isFirstSelected: day.isSame(startDate, 'day'),
      isLastSelected: day.isSame(endDate, 'day'),
      isHighlighted: dayInRange(day, startDate, endHighlight),
      isFirstHighlighted: day.isSame(startDate, 'day'),
      isLastHighlighted: day.isSame(endHighlight, 'day'),
    };
  };

  handleInteraction = (e, date) => {
    const { startDate, endDate, selectDate, onInteraction } = this.props;

    if (selectDate === SELECT_DATE.START) {
      onInteraction(e, date, endDate);
    } else if (selectDate === SELECT_DATE.END) {
      if (
        (startDate && endDate && date.isSame(endDate, 'day')) ||
        (startDate && date.isBefore(startDate, 'day'))
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
    const {
      startDate: _startDate,
      endDate: _endDate,
      onMonthChange,
      ...rest,
    } = this.props;

    return (
      <DayPicker
        { ...rest }
        dayProps={ {
          getDayState: this.getDayState,
          onHighlight: this.handleHighlight,
        } }
        onInteraction={ this.handleInteraction }
        onMonthChange={ onMonthChange }
      />
    );
  }
}