import React, { PropTypes } from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

import css from './CalendarItem.css';

const defaultDate = moment();

export const defaultClassNames = {
  root: css.root,
  today: css.today,
  outOfRange: css.outOfRange,
};

const CalendarDay = (props) => {
  const {
    day,
    format,
    className,
    dayClassName,
    classNames,
    today,
    outOfRange,
    ...rest,
  } = props;

  const classes = cx(
    classNames.root,
    today ? classNames.today : null,
    outOfRange ? classNames.outOfRange : null,
    className,
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
  dayClassName: PropTypes.string,
  className: PropTypes.string,
  classNames: PropTypes.object,
  today: PropTypes.bool,
  outOfRange: PropTypes.bool,
};

CalendarDay.defaultProps = {
  day: defaultDate,
  format: 'D',
  dayClassName: '',
  classNames: defaultClassNames,
};

export default CalendarDay;
