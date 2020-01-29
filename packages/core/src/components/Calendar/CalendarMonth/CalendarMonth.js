// @flow
import React, { Component } from 'react';
import momentPropTypes from 'react-moment-proptypes';
import moment from '../../../utils/moment/moment';

import css from './CalendarMonth.css';
import CalendarItem from '../CalendarItem/CalendarItem';
import { generateNumberFilledArray } from '../../../utils/array/array';
import getCalendarMonth, {
  getPreDayCount,
  getPostDayCount,
  DAYS_PER_WEEK,
} from '../getCalendarMonth/getCalendarMonth';

const today = moment();

export const defaultClassNames = {
  root: css.root,
  head: css.head,
  body: css.body,
  row: css.row,
  cell: css.cell,
};

type Classnames = {
  root: string,
  head: string,
  body: string,
  row: string,
  cell: string,
}

type Props = {
  month: momentPropTypes.momentObj,
  DayComponent: Function,
  ColumnHeadingComponent: Function,
  showOutOfRange: boolean,
  dayProps: Object,
  columnHeadingProps: Object,
  classNames: Classnames,
}
export default class CalendarMonth extends Component<Props> {
  static defaultProps = {
    month: today,
    ColumnHeadingComponent: CalendarItem,
    DayComponent: CalendarItem,
    showOutOfRange: false,
    dayProps: {},
    columnHeadingProps: {},
    classNames: defaultClassNames,
  };

  render() {
    const {
      month,
      showOutOfRange,
      DayComponent,
      ColumnHeadingComponent,
      dayProps,
      columnHeadingProps,
      classNames,
    } = this.props;

    const head = generateNumberFilledArray(DAYS_PER_WEEK);
    const startOfMonth = month.clone().startOf('month');
    const endOfMonth = month.clone().endOf('month');
    const calendarMonth = getCalendarMonth(
      startOfMonth,
      getPreDayCount(startOfMonth),
      getPostDayCount(startOfMonth),
    );

    return (
      <table className={classNames.root}>
        <thead className={classNames.head}>
          <tr className={classNames.row}>
            {head.map(offset => {
              const day = startOfMonth.clone().weekday(offset);
              const isClosed = columnHeadingProps.isClosed ? columnHeadingProps.isClosed(day) : false;
              return (
                <td key={`${month.format('MM')}-${day.format('dd')}`}>
                  <ColumnHeadingComponent
                    {...columnHeadingProps}
                    isClosed={day && isClosed}
                    day={day}
                    format={columnHeadingProps.format || 'dd'}
                  />
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody className={classNames.body}>
          {calendarMonth.map(row => (
            <tr className={classNames.row} key={`${month.format('MM')}-${row[0].format('DD/MM')}`}>
              {row.map(date => {
                const isCurrentMonth =
                  date.isSameOrAfter(startOfMonth) && date.isSameOrBefore(endOfMonth);

                const day = showOutOfRange || isCurrentMonth ? date : null;

                return (
                  <td className={classNames.cell} key={`${date.format('DD/MM/YYYY')}`}>
                    <DayComponent
                      {...dayProps}
                      today={date.isSame(today, 'day')}
                      outOfRange={!isCurrentMonth}
                      day={day}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
