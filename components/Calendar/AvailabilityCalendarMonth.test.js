import React from 'react';
import { render } from 'react-dom';

import AvailabilityCalendarMonth, {
  reduceAvailabilityToHash,
  reduceBookingRequestToDateHash,
  combineAvailabilityAndBookingRequests,
} from './AvailabilityCalendarMonth';

describe('reduceAvailabilityToHash', () => {
  it('returns an object where the availability is keyed by it\'s date', () => {
    const calendar = [{
      id: 1,
      date: '2017-02-17',
    }];

    const keyedCalendar = {
      '2017-02-17': {
        id: 1,
        date: '2017-02-17',
      },
    };
    expect(reduceAvailabilityToHash(calendar)).toEqual(keyedCalendar);
  });
});

describe('reduceBookingRequestToDateHash', () => {
  it('returns an object where the booking requests are keyed by their date', () => {
    const bookingRequests = [{
      id: 1,
      start_on: '2017-02-20',
      end_on: '2017-02-21',
    }];

    const keyedCalendar = {
      '2017-02-20': [{
        id: 1,
        start_on: '2017-02-20',
        end_on: '2017-02-21',
      }],
      '2017-02-21': [{
        id: 1,
        start_on: '2017-02-20',
        end_on: '2017-02-21',
      }],
    };

    expect(reduceBookingRequestToDateHash(bookingRequests)).toEqual(keyedCalendar);
  });
});

describe('combineAvailabilityAndBookingRequests', () => {
  it('returns an hash, keyed by dates, of availability and booking requests mapped together',
    () => {
      const availability = {
        '2017-02-20': {
          id: 1,
          date: '2017-02-20',
        },
      };

      const bookingRequests = {
        '2017-02-20': [{
          id: 1,
          start_on: '2017-02-20',
          end_on: '2017-02-21',
        }],
        '2017-02-21': [{
          id: 1,
          start_on: '2017-02-20',
          end_on: '2017-02-21',
        }],
      };

      const combination = {
        '2017-02-20': {
          id: 1,
          date: '2017-02-20',
          bookingRequests: [{
            id: 1,
            start_on: '2017-02-20',
            end_on: '2017-02-21',
          }],
        },
      };

      expect(
        combineAvailabilityAndBookingRequests(availability, bookingRequests)
      ).toEqual(combination);
    }
  );
});

describe('AvailabilityCalendarMonth', () => {
  it('renders with a date without crashing', () => {
    const div = document.createElement('div');
    render(<AvailabilityCalendarMonth />, div);
  });
});