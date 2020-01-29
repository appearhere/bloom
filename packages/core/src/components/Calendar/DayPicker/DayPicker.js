// @flow
import * as React from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import keyMirror from 'key-mirror';

import Icon from '../../Icon/Icon';
import noop from '../../../utils/noop';
import DayPickerItem from './DayPickerItem';
import moment from '../../../utils/moment/moment';
import BtnContainer from '../../BtnContainer/BtnContainer';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import CalendarMonth, { defaultClassNames as calendarMonthDefaultClassNames } from '../CalendarMonth/CalendarMonth';
import css from './DayPicker.css';

const calendarMonthClassNames = Object.assign({}, calendarMonthDefaultClassNames, {
  head: cx(calendarMonthDefaultClassNames.head, css.head),
  cell: cx(calendarMonthDefaultClassNames.cell, css.cell),
});

export const SELECT_DATE = keyMirror({
  START: null,
  END: null,
});

export const getDates = (startDate: momentPropTypes.momentObj, endDate: momentPropTypes.momentObj) => {
  if (!endDate) return [startDate];
  if (!startDate) return [endDate];

  return startDate.isAfter(endDate)
    ? (Array.from(moment.range(endDate, startDate).by('day')): Array<momentPropTypes.momentObj>)
    : (Array.from(moment.range(startDate, endDate).by('day')): Array<momentPropTypes.momentObj>);
};

const today = moment();

type Classnames = {
  root: string,
  header: string,
}

type Props = {
  month: momentPropTypes.momentObj,
  onInteraction: Function,
  onMonthChange: Function,
  dayProps: Object,
  columnHeadingProps: Object,
  accessibilityNextLabel: string,
  accessibilityPrevLabel: string,
  classNames: Classnames,
  children?: React.Node,
  maskSize: number
}

export default class DayPicker extends React.Component<Props> {
  static defaultProps = {
    month: today,
    onInteraction: noop,
    onHighlight: noop,
    onMonthChange: noop,
    dayProps: {},
    columnHeadingProps: {},
    accessibilityNextLabel: 'Go to next month',
    accessibilityPrevLabel: 'Go to previous month',
    classNames: {
      root: '',
      header: '',
    },
    maskSize: 1,
  };

  handleNextMonth = (e: Event) => {
    const { month, onMonthChange } = this.props;
    const nextMonth = month.clone().add(1, 'month');
    onMonthChange(e, nextMonth);
  };

  handlePreviousMonth = (e: Event) => {
    const { month, onMonthChange } = this.props;
    const prevMonth = month.clone().add(-1, 'month');
    onMonthChange(e, prevMonth);
  };

  render() {
    const {
      dayProps,
      columnHeadingProps,
      onInteraction,
      accessibilityNextLabel,
      accessibilityPrevLabel,
      classNames,
      children,
      maskSize,
    } = this.props;

    return (
      <div className={cx(css.root, classNames.root)}>
        {[...Array(maskSize)].map((_, i) => {
          const month = this.props.month.clone().add(i, 'months');
          return (
            <div className={css.monthWrapper} key={`month-${month.toISOString()}`}>
              <div className={cx(css.header, classNames.header)}>
                <div className={cx(css.control, css.prevControl)}>
                {i === 0 && (
                  <BtnContainer onClick={this.handlePreviousMonth}>
                    <Icon name="chevron" className={css.prevIcon} />
                    <ScreenReadable>{accessibilityPrevLabel}</ScreenReadable>
                  </BtnContainer>
                )}
                </div>
                <div className={css.month}>{month.format('MMMM YYYY')}</div>
                <div className={cx(css.control, css.nextControl)}>
                {i === maskSize - 1 && (
                  <BtnContainer onClick={this.handleNextMonth}>
                    <Icon name="chevron" className={css.nextIcon} />
                    <ScreenReadable>{accessibilityNextLabel}</ScreenReadable>
                  </BtnContainer>
                )}
                </div>
              </div>
              <CalendarMonth
                {...(this.props: any)}
                classNames={calendarMonthClassNames}
                month={month}
                columnHeadingProps={{
                  ...columnHeadingProps,
                  className: css.columnHeader,
                }}
                dayProps={{
                  ...dayProps,
                  onInteraction,
                }}
                DayComponent={DayPickerItem}
              />
              {children}
            </div>
          );
        })}
      </div>
    );
  }
}
