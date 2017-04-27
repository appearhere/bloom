import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import difference from 'lodash/fp/difference';

import css from './DayPickerItem.css';
import noop from '../../../utils/noop';
import { ENTER } from '../../../constants/keycodes';
import CalendarItem from '../CalendarItem/CalendarItem';

const isDisabledState = (day, disabledDates) => day
  && disabledDates.length > 0
  && disabledDates.some(date => day.isSame(date, 'day'));

export default class DayPickerItem extends Component {
  static propTypes = {
    day: momentPropTypes.momentObj,
    selectedDates: PropTypes.arrayOf(momentPropTypes.momentObj),
    highlightedDates: PropTypes.arrayOf(momentPropTypes.momentObj),
    disabledDates: PropTypes.arrayOf(momentPropTypes.momentObj),
    onInteraction: PropTypes.func,
    onHighlight: PropTypes.func,
  };

  static defaultProps = {
    selectedDates: [],
    highlightedDates: [],
    disabledDates: [],
    onInteraction: noop,
    onMouseOver: noop,
  };

  constructor(props) {
    super(props);

    this.state = {
      disabled: isDisabledState(props.day, props.disabledDates),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { day: currentDay, disabledDates: currentDisabled } = this.props;
    const { day: nextDay, disabledDates: nextDisabled } = nextProps;

    if (
      (currentDay && nextDay && !currentDay.isSame(nextDay)) ||
      difference(currentDisabled, nextDisabled).length > 0
    ) {
      this.setState({
        disabled: isDisabledState(nextDay, nextDisabled),
      });
    }
  }

  handleInteraction = (e) => {
    const { type, keyCode } = e;
    const { disabled } = this.state;
    const { day, onInteraction } = this.props;
    let handled = false;

    if (!disabled && onInteraction) {
      e.persist();
      e.preventDefault();

      if (type === 'touchend') {
        handled = true;
        onInteraction(e, day);
      } else if (keyCode === ENTER) {
        handled = true;
        onInteraction(e, day);
      } else if (type === 'click' && !handled) {
        onInteraction(e, day);
      } else {
        handled = false;
      }
    }
  }

  handleHighlight = (e) => {
    const { disabled } = this.state;
    const { day, onHighlight } = this.props;
    if (!disabled && onHighlight) onHighlight(e, day);
  }

  handleMouseOver = this.handleHighlight;
  handleFocus = this.handleHighlight;

  render() {
    const {
      day,
      selectedDates,
      highlightedDates,
      disabledDates: _disabledDates,
      onHighlight: _onHighlight,
      onInteraction: _onInteraction,
      ...rest,
    } = this.props;

    const { disabled } = this.state;

    let className = cx(
      css.root,
      disabled ? css.disabled : null,
    );

    if (day) {
      if (highlightedDates.length > 0) {
        className = cx(
          className,
          highlightedDates.some(date => day.isSame(date, 'day')) ? css.highlighted : null,
          day.isSame(highlightedDates[0], 'day') ? css.firstHighlighted : null,
          day.isSame(highlightedDates[highlightedDates.length - 1], 'day')
            ? css.lastHighlighted
            : null,
        );
      }

      if (selectedDates.length > 0) {
        className = cx(
          className,
          selectedDates.some(date => day.isSame(date, 'day')) ? css.selected : null,
          day.isSame(selectedDates[0], 'day') ? css.firstSelected : null,
          day.isSame(selectedDates[selectedDates.length - 1], 'day') ? css.lastSelected : null,
        );
      }
    }

    return (
      <CalendarItem
        { ...rest }
        onClick={ this.handleInteraction }
        onTouchEnd={ this.handleInteraction }
        onKeyUp={ this.handleInteraction }
        onMouseOver={ this.handleMouseOver }
        onFocus={ this.handleFocus }
        tabIndex={ 0 }
        className={ className }
        day={ day }
      />
    );
  }
}