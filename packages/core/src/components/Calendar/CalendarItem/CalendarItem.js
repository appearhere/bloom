// @flow
import React from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';

import css from './CalendarItem.css';

const defaultDate = moment();

type Props = {
  day: momentPropTypes.momentObj,
  format: string,
  dayClassName: string,
  className?: string,
  classNames: Object,
  today?: boolean,
  outOfRange?: boolean,
  isClosed: boolean,
  subtext?: string,
}

export const defaultClassNames = {
  root: css.root,
  today: css.today,
  outOfRange: css.outOfRange,
  closed: css.closed,
};

const CalendarDay = (props: Props) => {
  const { day, format, className, dayClassName, classNames, today, outOfRange, isClosed, subtext, ...rest } = props;

  const classes = cx(
    classNames.root,
    today ? classNames.today : null,
    outOfRange ? classNames.outOfRange : null,
    isClosed ? classNames.closed : null,
    className,
  );

  return day ? (
    <div {...rest} className={classes}>
      <span className={dayClassName}>{day.format(format)}</span>
        {subtext &&
          <div className={css.subtext}>
            <p>{subtext}</p>
          </div>
        }
    </div>
  ) : (
    <div className={classes}>{'\u00a0'}</div>
  );
};

CalendarDay.defaultProps = {
  day: defaultDate,
  format: 'D',
  dayClassName: '',
  classNames: defaultClassNames,
  isClosed: false,
};

export default CalendarDay;
