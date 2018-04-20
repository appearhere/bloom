import React, { Component } from 'react';
import moment from 'moment';
import cx from 'classnames';
import dedent from 'dedent';

import Specimen from '../../../components/Specimen/Specimen';
import { D, H, T, C } from '../../../components/Scaffold/Scaffold';

import DayPicker from '../../../../components/Calendar/DayPicker/DayPicker';
import { defaultDayState } from '../../../../components/Calendar/DayPicker/DayPickerItem';
import DayRangePicker, {
  SELECT_DATE,
} from '../../../../components/Calendar/DayRangePicker/DayRangePicker';
import CalendarItem from '../../../../components/Calendar/CalendarItem/CalendarItem';
import CalendarMonth from '../../../../components/Calendar/CalendarMonth/CalendarMonth';
import DayRange from '../../../../components/Calendar/DayRange/DayRange';

import m from '../../../../globals/modifiers.css';

export default class CalendarDocumentation extends Component {
  state = {
    dayRange: {
      startDate: '',
      endDate: '',
      selectDate: 'START',
    },
    dayPicker: {
      date: '',
      month: moment(),
    },
    dayRangePicker: {
      startDate: null,
      endDate: null,
      selectDate: SELECT_DATE.START,
      date: '',
      month: moment(),
    },
  };

  getDayState = day => {
    const { dayPicker } = this.state;
    return {
      ...defaultDayState,
      isSelected: day && dayPicker.date && day.isSame(dayPicker.date, 'day'),
      isFirstSelected: day && dayPicker.date && day.isSame(dayPicker.date, 'day'),
      isLastSelected: day && dayPicker.date && day.isSame(dayPicker.date, 'day'),
    };
  };

  handleStartDateClick = () => {
    this.setState(state => ({
      dayRange: {
        ...state.dayRange,
        startDate: '08/05/1995',
        selectDate: 'END',
      },
    }));
  };

  handleEndDateClick = () => {
    this.setState(state => ({
      dayRange: {
        ...state.dayRange,
        endDate: '02/03/2018',
      },
    }));
  };

  handleDayPickerInteraction = (e, date) => {
    this.setState(state => ({
      dayPicker: {
        ...state.dayPicker,
        date,
      },
    }));
  };

  handleDayPickerMonthChange = (e, month) => {
    this.setState(state => ({
      dayPicker: {
        ...state.dayPicker,
        month,
      },
    }));
  };

  handleDayRangeInteraction = (e, startDate, endDate) => {
    this.setState(state => ({
      dayRangePicker: {
        ...state.dayPicker,
        startDate,
        endDate,
        selectDate: SELECT_DATE.END,
      },
    }));
  };

  handleDayRangeMonthChange = (e, month) => {
    this.setState(state => ({
      dayRangePicker: {
        ...state.dayRangePicker,
        month,
      },
    }));
  };

  render() {
    const { dayPicker, dayRangePicker, dayRange } = this.state;

    return (
      <div>
        <H level={1}>Calendar</H>
        <T elm="p" className={cx(m.mtr, m.largeI, m.demi)}>
          The Calendar components are to be used in a scenario where you need to either display, or
          get a date from a user.
        </T>

        <D>
          <H level={2}>Presentational</H>
          <T elm="p" className={m.mtr}>
            Use these components to display a date, date range, or calendar month.
          </T>

          <H level={3} className={m.mtLgIi}>
            Calendar Item
          </H>
          <T elm="p" className={m.mtr}>
            The <C>CalendarItem</C> is used to represent a single date.
          </T>

          <H level={4} className={m.mtLgIi}>
            Default
          </H>
          <T elm="p" className={m.mtr}>
            By default it shows the current day of the month.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <CalendarItem />
            `}
          >
            <CalendarItem />
          </Specimen>

          <H level={4} className={m.mtLgIi}>
            Custom Formatting
          </H>
          <T elm="p" className={m.mtr}>
            The <C>CalendarItem</C> supports different date formats. This can be controlled using
            the <C>format</C> prop shown below.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <CalendarItem format="MMM" />
            `}
          >
            <CalendarItem format="MMM" />
          </Specimen>

          <H level={3} className={m.mtLgIi}>
            Day Range
          </H>
          <T elm="p" className={m.mtr}>
            The Day Range can be used to display a start and an end date. The component is intended
            to be used a target to date selection. Clicking on either the start date or end date
            container will indicate the current selection with an underline.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <DayRange
                startDate={dayRange.startDate}
                endDate={dayRange.endDate}
                selectDate={dayRange.selectDate}
                onStartDateClick={this.handleStartDateClick}
                onEndDateClick={this.handleEndDateClick}
               />
            `}
          >
            <DayRange
              startDate={dayRange.startDate}
              endDate={dayRange.endDate}
              selectDate={dayRange.selectDate}
              onStartDateClick={this.handleStartDateClick}
              onEndDateClick={this.handleEndDateClick}
            />
          </Specimen>

          <H level={3} className={m.mtLgIi}>
            Calendar Month
          </H>
          <T elm="p" className={m.mtr}>
            The <C>CalendarMonth</C> component should be used to represent the current month, the
            current day is indicated by type weight.
          </T>

          <H level={4} className={m.mtLgIi}>
            Default
          </H>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <CalendarMonth />
            `}
          >
            <CalendarMonth />
          </Specimen>

          <H level={4} className={m.mtLgIi}>
            Show Dates From Adjacent Months
          </H>
          <T elm="p" className={m.mtr}>
            By default the <C>CalendarMonth</C> component hides dates outside of the current month.
            To override this behaviour use the <C>showOutOfRange</C> prop shown below. The out of
            range days are indicated with the grey colored type.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <CalendarMonth showOutOfRange />
            `}
          >
            <CalendarMonth showOutOfRange />
          </Specimen>

          <H level={4} className={m.mtLgIi}>
            Custom Heading Formatting
          </H>
          <T elm="p" className={m.mtr}>
            The <C>CalendarMonth</C> column heading format can be controlled using the
            <C>columnHeadingProps</C> and <C>format</C> props.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <CalendarMonth columnHeadingProps={{ format: 'dddd' }} />
            `}
          >
            <CalendarMonth
              columnHeadingProps={{
                format: 'dddd',
              }}
            />
          </Specimen>

          <H level={3} className={m.mtLgIi}>
            Day Picker
          </H>
          <T elm="p" className={m.mtr}>
            Like <C>calendarMonth</C>, but allows a day to be selected when clicked or touched; the
            selected day is indicated by a filled square. Using the left and right chevrons you can
            navigate through the months.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
                <DayPicker
                  month={month}
                  onInteraction={this.handleInteraction}
                  onMonthChange={this.handleMonthChange}
                  dayProps={{ getDayState: this.getDayState }}
                />
            `}
          >
            <DayPicker
              name="dayPicker"
              month={dayPicker.month}
              onInteraction={this.handleDayPickerInteraction}
              onMonthChange={this.handleDayPickerMonthChange}
              dayProps={{ getDayState: this.getDayState }}
            />
          </Specimen>

          <H level={3} className={m.mtLgIi}>
            Day Range Picker
          </H>
          <T elm="p" className={m.mtr}>
            Clicking a date selects a start date and then moving the mouse into the future indicates
            the range using a row or block of filled squares. Clicking again selects the end date.
          </T>
          <Specimen
            classNames={{
              root: m.mtr,
              specimenContainer: m.par,
            }}
            code={dedent`
              <DayRangePicker
                startDate={dayRangePicker.startDate}
                endDate={dayRangePicker.endDate}
                selectDate={dayRangePicker.selectDate}
                month={dayRangePicker.month}
                onInteraction={this.handleDayRangeInteraction}
                onMonthChange={this.handleDayRangeMonthChange}
              />
            `}
          >
            <DayRangePicker
              startDate={dayRangePicker.startDate}
              endDate={dayRangePicker.endDate}
              selectDate={dayRangePicker.selectDate}
              month={dayRangePicker.month}
              onInteraction={this.handleDayRangeInteraction}
              onMonthChange={this.handleDayRangeMonthChange}
            />
          </Specimen>
        </D>
      </div>
    );
  }
}
