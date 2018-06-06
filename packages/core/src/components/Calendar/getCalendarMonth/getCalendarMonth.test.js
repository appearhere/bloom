import moment from 'moment';
import getCalendarMonth, { getPreDayCount, getPostDayCount } from './getCalendarMonth';

const january1970Moment = moment({
  year: 1970,
  month: 0,
  day: 1,
});

const january1970Array = [
  [
    moment({ day: 28, year: 1969, month: 11 }),
    moment({ day: 29, year: 1969, month: 11 }),
    moment({ day: 30, year: 1969, month: 11 }),
    moment({ day: 31, year: 1969, month: 11 }),
    moment({ day: 1, year: 1970, month: 0 }),
    moment({ day: 2, year: 1970, month: 0 }),
    moment({ day: 3, year: 1970, month: 0 }),
  ],
  [
    moment({ day: 4, year: 1970, month: 0 }),
    moment({ day: 5, year: 1970, month: 0 }),
    moment({ day: 6, year: 1970, month: 0 }),
    moment({ day: 7, year: 1970, month: 0 }),
    moment({ day: 8, year: 1970, month: 0 }),
    moment({ day: 9, year: 1970, month: 0 }),
    moment({ day: 10, year: 1970, month: 0 }),
  ],
  [
    moment({ day: 11, year: 1970, month: 0 }),
    moment({ day: 12, year: 1970, month: 0 }),
    moment({ day: 13, year: 1970, month: 0 }),
    moment({ day: 14, year: 1970, month: 0 }),
    moment({ day: 15, year: 1970, month: 0 }),
    moment({ day: 16, year: 1970, month: 0 }),
    moment({ day: 17, year: 1970, month: 0 }),
  ],
  [
    moment({ day: 18, year: 1970, month: 0 }),
    moment({ day: 19, year: 1970, month: 0 }),
    moment({ day: 20, year: 1970, month: 0 }),
    moment({ day: 21, year: 1970, month: 0 }),
    moment({ day: 22, year: 1970, month: 0 }),
    moment({ day: 23, year: 1970, month: 0 }),
    moment({ day: 24, year: 1970, month: 0 }),
  ],
  [
    moment({ day: 25, year: 1970, month: 0 }),
    moment({ day: 26, year: 1970, month: 0 }),
    moment({ day: 27, year: 1970, month: 0 }),
    moment({ day: 28, year: 1970, month: 0 }),
    moment({ day: 29, year: 1970, month: 0 }),
    moment({ day: 30, year: 1970, month: 0 }),
    moment({ day: 31, year: 1970, month: 0 }),
  ],
  [
    moment({ day: 1, year: 1970, month: 1 }),
    moment({ day: 2, year: 1970, month: 1 }),
    moment({ day: 3, year: 1970, month: 1 }),
    moment({ day: 4, year: 1970, month: 1 }),
    moment({ day: 5, year: 1970, month: 1 }),
    moment({ day: 6, year: 1970, month: 1 }),
    moment({ day: 7, year: 1970, month: 1 }),
  ],
];

describe('getPreDayCount', () => {
  it('returns 3 days for January 1970', () => {
    expect(getPreDayCount(january1970Moment)).toEqual(4);
  });
});

describe('getPostDayCount', () => {
  it('returns 8 days for January 1970', () => {
    expect(getPostDayCount(january1970Moment)).toEqual(7);
  });
});

describe('getCalendarMonthArray', () => {
  it('produces a calendar month of dates ', () => {
    expect(getCalendarMonth(january1970Moment, 4, 7).toString()).toEqual(
      january1970Array.toString(),
    );
  });

  it('returns valid moment dates', () => {
    expect(getCalendarMonth(january1970Moment, 4, 7)[0][0].isValid()).toBe(true);
  });
});
