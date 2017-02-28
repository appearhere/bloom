import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';

import CalendarItem, {
  defaultClassNames,
  defaultModifiers,
} from './CalendarItem';
import { ENTER } from '../../constants/keycodes';
import css from './InteractiveCalendarItem.css';

const emptyArr = [];

export default class InteractiveCalendarItem extends Component {
  static propTypes = {
    day: momentPropTypes.momentObj,
    onInteraction: PropTypes.func,
    onMouseOver: PropTypes.func,
    highlightedDates: PropTypes.arrayOf(momentPropTypes.momentObj),
    disabled: PropTypes.bool,
    modifiers: PropTypes.object,
    classNames: PropTypes.object,
  };

  static defaultProps = {
    classNames: defaultClassNames,
    modifiers: defaultModifiers,
    highlightedDates: emptyArr,
  };

  handleInteraction = (e) => {
    const { day, disabled, onInteraction } = this.props;

    if (!disabled && onInteraction) {
      e.persist();
      e.preventDefault();
      onInteraction(e, day);
    }
  }

  handleClick = this.handleInteraction;
  handleTouchStart = this.handleInteraction;

  handleKeyUp = (e) => {
    const { keyCode } = e;
    if (keyCode === ENTER) this.handleInteraction(e);
  };

  handleMouseOver = (e) => {
    const { day, disabled, onMouseOver } = this.props;
    if (!disabled && onMouseOver) onMouseOver(e, day);
  }

  render() {
    const {
      day,
      onInteraction,
      disabled,
      highlightedDates,
      modifiers: modifiersProp,
      classNames: classNamesProp,
      ...rest,
    } = this.props;

    const isInteractive = !!onInteraction && !disabled;

    const modifiers = {
      interactive: isInteractive,
      withDate: !!day,
      highlighted: day && highlightedDates.some(date => day.isSame(date, 'day')),
      disabled,
      ...modifiersProp,
    };

    const classNames = {
      withDate: css.withDate,
      interactive: css.interactive,
      highlighted: css.highlighted,
      disabled: css.disabled,
      ...classNamesProp,
      selected: cx(classNamesProp.selected, css.selected),
    };

    return (
      <CalendarItem
        { ...rest }
        day={ day }
        onClick={ this.handleClick }
        onTouchStart={ this.handleTouchStart }
        onKeyUp={ this.handleKeyUp }
        onMouseOver={ this.handleMouseOver }
        tabIndex={ isInteractive ? 0 : '' }
        modifiers={ modifiers }
        classNames={ classNames }
      />
    );
  }
}