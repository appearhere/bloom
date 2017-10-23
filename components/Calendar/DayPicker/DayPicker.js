import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';
import momentPropTypes from 'react-moment-proptypes';
import keyMirror from 'key-mirror';

import Icon from '../../Icon/Icon';
import noop from '../../../utils/noop';
import DayPickerItem from './DayPickerItem';
import moment from '../../../utils/moment/moment';
import BtnContainer from '../../BtnContainer/BtnContainer';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import CalendarMonth, { defaultClassNames } from '../CalendarMonth/CalendarMonth';
import css from './DayPicker.css';

const classNames = Object.assign({}, defaultClassNames, {
  head: cx(defaultClassNames.head, css.head),
  cell: cx(defaultClassNames.cell, css.cell),
});

export const SELECT_DATE = keyMirror({
  START: null,
  END: null,
});

export const getDates = (startDate, endDate) => {
  if (!endDate) return [startDate];
  if (!startDate) return [endDate];

  return startDate.isAfter(endDate)
    ? Array.from(moment.range(endDate, startDate).by('day'))
    : Array.from(moment.range(startDate, endDate).by('day'));
};

const today = moment();

export default class DayPicker extends Component {
  static propTypes = {
    month: momentPropTypes.momentObj,
    onInteraction: PropTypes.func,
    onMonthChange: PropTypes.func,
    dayProps: PropTypes.object,
    accessibilityNextLabel: PropTypes.string,
    accessibilityPrevLabel: PropTypes.string,
  };

  static defaultProps = {
    month: today,
    onInteraction: noop,
    onHighlight: noop,
    onMonthChange: noop,
    dayProps: {},
    accessibilityNextLabel: 'Go to next month',
    accessibilityPrevLabel: 'Go to previous month',
  };

  handleNextMonth = (e) => {
    const { month, onMonthChange } = this.props;
    const nextMonth = month.clone().add(1, 'month');
    onMonthChange(e, nextMonth);
  };

  handlePreviousMonth = (e) => {
    const { month, onMonthChange } = this.props;
    const prevMonth = month.clone().add(-1, 'month');
    onMonthChange(e, prevMonth);
  };

  render() {
    const {
      month,
      dayProps,
      onInteraction,
      accessibilityNextLabel,
      accessibilityPrevLabel,
    } = this.props;

    return (
      <div className={ css.root }>
        <div className={ css.header }>
          <div className={ cx(css.control, css.prevControl) }>
            <BtnContainer onClick={ this.handlePreviousMonth }>
              <Icon name="chevron" className={ css.prevIcon } />
              <ScreenReadable>{ accessibilityPrevLabel }</ScreenReadable>
            </BtnContainer>
          </div>
          <div className={ css.month }>
            { month.format('MMMM YYYY') }
          </div>
          <div className={ cx(css.control, css.nextControl) }>
            <BtnContainer onClick={ this.handleNextMonth }>
              <Icon name="chevron" className={ css.nextIcon } />
              <ScreenReadable>{ accessibilityNextLabel }</ScreenReadable>
            </BtnContainer>
          </div>
        </div>
        <CalendarMonth
          { ...this.props }
          classNames={ classNames }
          month={ month }
          columnHeadingProps={ {
            className: css.columnHeader,
          } }
          dayProps={ {
            ...dayProps,
            onInteraction,
          } }
          DayComponent={ DayPickerItem }
        />
      </div>
    );
  }
}
