import React, { PropTypes } from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

import css from './CalendarItem.css';

export const defaultClassNames = {
  selected: css.selected,
  today: css.today,
  outOfRange: css.outOfRange,
};

export const defaultModifiers = {
  selected: false,
  today: false,
  outOfRange: false,
};

const today = moment();

const CalendarDay = (props) => {
  const {
    day,
    format,
    classNames,
    modifiers,
    dayClassName,
    ...rest,
  } = props;

  const classes = cx(
    css.root,
    Object
      .keys(modifiers)
      .filter(key => modifiers[key])
      .map(modifier => classNames[modifier]),
  );

  return day ? (
    <div { ...rest } className={ classes }>
      <span className={ dayClassName }>{ day.format(format) }</span>
    </div>
  ) : (
    <div className={ classes }>
      { '\u00a0' }
    </div>
  );
};

CalendarDay.propTypes = {
  day: momentPropTypes.momentObj,
  format: PropTypes.string,
  classNames: PropTypes.object,
  modifiers: PropTypes.object,
  dayClassName: PropTypes.string,
};

CalendarDay.defaultProps = {
  day: today,
  format: 'D',
  classNames: defaultClassNames,
  modifiers: defaultModifiers,
  dayClassName: '',
};

export default CalendarDay;