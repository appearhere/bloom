//@flow
import { generateArray, generateNumberFilledArray, reshapeArray } from '../../../utils/array/array';
import momentPropTypes from 'react-moment-proptypes';

export const CALENDAR_MONTH_LENGTH = 42;
export const DAYS_PER_WEEK = 7;
export const CALENDAR_ROWS = CALENDAR_MONTH_LENGTH / DAYS_PER_WEEK;

export const getPreDayCount = (date: momentPropTypes.momentObj) =>
  date
    .clone()
    .startOf('month')
    .weekday();

export const getPostDayCount = (date: momentPropTypes.momentObj) => {
  const preDayCount = getPreDayCount(date);
  return CALENDAR_MONTH_LENGTH - date.daysInMonth() - preDayCount;
};

const getCalendarMonth = (date: momentPropTypes.momentObj, preDayCount: number, postDayCount: number) => {
  const month = date.clone().startOf('month');

  const preDays = generateArray(preDayCount)
    .fill('')
    .map((_, i, { length }) => {
      const offset = length - i;
      return month.clone().subtract(offset, 'days');
    });

  const postDays = generateArray(postDayCount)
    .fill('')
    .map((_, i) => {
      const offset = i + 1;
      return month
        .clone()
        .endOf('month')
        .startOf('day')
        .add(offset, 'days');
    });

  const monthDays = generateNumberFilledArray(month.daysInMonth(), 1).map(day =>
    month.clone().date(day),
  );

  const calendarMonth = [...preDays, ...monthDays, ...postDays];
  return reshapeArray(calendarMonth, CALENDAR_ROWS);
};

export default getCalendarMonth;
