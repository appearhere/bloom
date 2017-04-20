import React, { Component, PropTypes } from 'react';

import moment from '../../../utils/moment/moment';
import { SERVER_DATE } from '../../../constants/formats';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import AvailabilityCalendarItem from '../AvailabilityCalendarItem/AvailabilityCalendarItem';

export const reduceAvailabilityToHash = calendar => calendar.reduce((obj, entry) =>
  Object.assign(obj, {
    [entry.date]: entry,
  }),
{});

export const reduceBookingRequestToDateHash = calendar => calendar.reduce((obj, entry) => {
  const { start_on: startOn, end_on: endOn } = entry;
  const requestRange = moment.range(startOn, endOn);

  return Array.from(requestRange.by('days')).reduce((bookingRequests, day) => {
    const lookupDate = day.format(SERVER_DATE);
    const currentRequests = bookingRequests[lookupDate] || [];

    return Object.assign({}, bookingRequests, {
      [lookupDate]: [...currentRequests, entry],
    });
  }, obj);
}, {});

export const combineAvailabilityAndBookingRequests = (availability, bookingRequests) =>
  Object.keys(availability).reduce((obj, date) =>
    Object.assign(obj, {
      [date]: Object.assign({}, availability[date], {
        id: availability[date].id,
        bookingRequests: bookingRequests[date],
      }),
    }),
  {});

export default class AvailabilityCalendarMonth extends Component {
  static propTypes = {
    availabilityCalendar: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        date: PropTypes.string,
        confidence: PropTypes.number,
        state: PropTypes.string,
        halo: PropTypes.bool,
      }),
    ),
    bookingRequests: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        idea_name: PropTypes.string,
        idea_category: PropTypes.string,
        start_on: PropTypes.string,
        end_on: PropTypes.string,
        primary_photo_thumbnail_url: PropTypes.string,
        tooltip: PropTypes.string,
        complete: PropTypes.bool,
      }),
    ),
    dayProps: PropTypes.object,
  };

  static defaultProps = {
    availabilityCalendar: [],
    bookingRequests: [],
  };

  render() {
    const {
      availabilityCalendar,
      bookingRequests,
      dayProps,
      ...rest,
    } = this.props;

    const availability = reduceAvailabilityToHash(availabilityCalendar);
    const requests = reduceBookingRequestToDateHash(bookingRequests);
    const calendarKnowledge = combineAvailabilityAndBookingRequests(availability, requests);

    return (
      <CalendarMonth
        { ...rest }
        DayComponent={ AvailabilityCalendarItem }
        dayProps={ {
          ...dayProps,
          meta: calendarKnowledge,
        } }
      />
    );
  }
}