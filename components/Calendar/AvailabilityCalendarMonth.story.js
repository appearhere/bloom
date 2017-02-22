import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AvailabilityCalendarMonth from './AvailabilityCalendarMonth';
import AvailabilityCalendarItem from './AvailabilityCalendarItem';
import InteractionHandler from './InteractionHandler';

const availabilitiesCalendar = {
  calendar_dates: [{
    id: 545718,
    date: '2017-02-17',
    confidence: 1.0,
    state: 'available',
    halo: true,
  }, {
    id: 545718,
    date: '2017-02-18',
    confidence: 1.0,
    state: 'unavailable',
    halo: false,
  }, {
    id: 545718,
    date: '2017-02-19',
    confidence: 1.0,
    state: 'available',
    halo: false,
  }, {
    id: 545718,
    date: '2017-02-20',
    confidence: 1.0,
    state: 'available',
    halo: false,
  }, {
    id: 545719,
    date: '2017-02-21',
    confidence: 1.0,
    state: 'available',
    halo: false,
  }, {
    id: 545719,
    date: '2017-02-22',
    confidence: 1.0,
    state: 'available',
    halo: false,
    void: true,
  }],
  booking_requests: [{
    id: 44240,
    idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
    idea_category: 'popup_bar',
    start_on: '2017-02-20',
    end_on: '2017-02-20',
    primary_photo_thumbnail_url: 'https://appearhere.imgix.net/https%3A%2F%2Fappearhere-user-content.s3-eu-west-1.amazonaws.com%2Fuploads%2Fidea_images%2F9db8ee91bb76cafad7387a148b87b057-File+27-06-2016%2C+17+04+12.jpeg?ixlib=rb-0.3.5&h=480&w=480&s=00a5407ec5354d1dc42c94c2d8ab6e85',
    tooltip: 'Offer Accepted',
    complete: false,
  }, {
    id: 44241,
    idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
    idea_category: 'popup_bar',
    start_on: '2017-02-21',
    end_on: '2017-02-21',
    primary_photo_thumbnail_url: 'https://appearhere.imgix.net/https%3A%2F%2Fappearhere-user-content.s3-eu-west-1.amazonaws.com%2Fuploads%2Fidea_images%2F9db8ee91bb76cafad7387a148b87b057-File+27-06-2016%2C+17+04+12.jpeg?ixlib=rb-0.3.5&h=480&w=480&s=00a5407ec5354d1dc42c94c2d8ab6e85',
    tooltip: 'Offer Accepted',
    complete: true,
  }],
};

storiesOf('AvailabilityCalendarMonth', module)
  .add('Default', () => (
    <AvailabilityCalendarMonth
      availabilityCalendar={ availabilitiesCalendar.calendar_dates }
      bookingRequests={ availabilitiesCalendar.booking_requests }
    />
  ))
  .add('Interactive', () => (
    <InteractionHandler
      onInteraction={ action('Interaction...') }
      DayComponent={ AvailabilityCalendarItem }
    >
      <AvailabilityCalendarMonth
        availabilityCalendar={ availabilitiesCalendar.calendar_dates }
        bookingRequests={ availabilitiesCalendar.booking_requests }
      />
    </InteractionHandler>
  ));