//@flow
import * as React from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';

import css from './DayPickerItem.css';
import noop from '../../../utils/noop';
import { ENTER } from '../../../constants/keycodes';
import CalendarItem from '../CalendarItem/CalendarItem';

export const defaultDayState = {
  isDisabled: false,
  isSelected: false,
  isClosed: false,
  isFirstSelected: false,
  isLastSelected: false,
  isHighlighted: false,
  isFirstHighlighted: false,
  isLastHighlighted: false,
  subtext: undefined,
};

const defaultGetDateState = () => defaultDayState;

type Props = {
  day: momentPropTypes.momentObj,
  getDayState: Function,
  onInteraction: Function,
  onHighlight: Function,
}

export default class DayPickerItem extends React.Component<Props> {
  static defaultProps = {
    getDayState: defaultGetDateState,
    onInteraction: noop,
    onMouseOver: noop,
  };

  handleInteraction = (e: SyntheticKeyboardEvent<>) => {
    const { type, keyCode } = e;
    const { day, onInteraction, getDayState } = this.props;
    const { isDisabled } = getDayState(day);
    let handled = false;

    if (!isDisabled && onInteraction) {
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
  };

  handleHighlight = (e: SyntheticMouseEvent<>) => {
    const { day, onHighlight, getDayState } = this.props;
    const { isDisabled } = getDayState(day);

    if (!isDisabled && onHighlight) onHighlight(e, day);
  };

  handleMouseOver = this.handleHighlight;
  handleFocus = this.handleHighlight;

  render() {
    const {
      day,
      onHighlight: _onHighlight,
      onInteraction: _onInteraction,
      getDayState,
      ...rest
    } = this.props;

    const state = getDayState(day);

    const className = cx(
      css.root,
      state.isDisabled ? css.disabled : null,
      state.isHighlighted ? css.highlighted : null,
      state.isSelected ? css.selected : null,
      state.isFirstSelected ? css.firstSelected : null,
      state.isLastSelected ? css.lastSelected : null,
      state.isFirstHighlighted ? css.firstHighlighted : null,
      state.isLastHighlighted ? css.lastHighlighted : null,
      state.isClosed ? css.closed : null,
    );

    return (
      <CalendarItem
        {...(rest: any)}
        onClick={this.handleInteraction}
        onTouchEnd={this.handleInteraction}
        onKeyUp={this.handleInteraction}
        onMouseOver={this.handleMouseOver}
        onFocus={this.handleFocus}
        tabIndex={0}
        className={className}
        day={day}
        subtext={state.subtext}
      />
    );
  }
}
