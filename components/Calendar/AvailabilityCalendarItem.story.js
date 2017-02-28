import React from 'react';
import { storiesOf } from '@kadira/storybook';
import moment from 'moment';
import AvailabilityCalendarItem, { AVAILABILITY_STATES } from './AvailabilityCalendarItem';
import { SERVER_DATE } from '../../constants/formats';

const today = moment();
const formattedToday = today.format(SERVER_DATE);

const stories = storiesOf('AvailabilityCalendarItem', module)
  .add('Default ', () => (
    <AvailabilityCalendarItem meta={ { [formattedToday]: {} } } />
  ))
  .add('Available', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          state: AVAILABILITY_STATES.AVAILABLE,
        },
      } }
    />
  ))
  .add('Unavailable ', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          state: AVAILABILITY_STATES.UNAVAILABLE,
        },
      } }
    />
  ))
  .add('Halo', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          halo: true,
        },
      } }
    />
  ))
  .add('Voided', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          void: true,
        },
      } }
    />
  ))
  .add('Under offer ', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          bookingRequests: [{
            id: 44240,
            idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
            idea_category: 'popup_bar',
            start_on: '2017-02-20',
            end_on: '2017-04-28',
            primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
            tooltip: 'Offer Accepted',
            complete: false,
          }],
        },
      } }
    />
  ))
  .add('with completed booking', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          bookingRequests: [{
            id: 44241,
            idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
            idea_category: 'popup_bar',
            start_on: '2017-02-20',
            end_on: '2017-04-28',
            primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
            tooltip: 'Offer Accepted',
            complete: true,
          }],
        },
      } }
    />
  ));

stories
  .add('Selected', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
        },
      } }
    />
  ))
  .add('Selected and Available', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
          state: AVAILABILITY_STATES.AVAILABLE,
        },
      } }
    />
  ))
  .add('Selected and Unavailable ', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
          state: AVAILABILITY_STATES.UNAVAILABLE,
        },
      } }
    />
  ))
  .add('Selected and Halo', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
          halo: true,
        },
      } }
    />
  ))
  .add('Selected and Voided', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
          void: true,
        },
      } }
    />
  ))
  .add('Selected and Under offer ', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
          bookingRequests: [{
            id: 44240,
            idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
            idea_category: 'popup_bar',
            start_on: '2017-02-20',
            end_on: '2017-04-28',
            primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
            tooltip: 'Offer Accepted',
            complete: false,
          }],
        },
      } }
    />
  ))
  .add('Selected and with completed booking', () => (
    <AvailabilityCalendarItem
      meta={ {
        [formattedToday]: {
          selected: true,
          bookingRequests: [{
            id: 44241,
            idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
            idea_category: 'popup_bar',
            start_on: '2017-02-20',
            end_on: '2017-04-28',
            primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
            tooltip: 'Offer Accepted',
            complete: true,
          }],
        },
      } }
    />
  ));

stories
  .add('Highlighted', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
        },
      } }
    />
  ))
  .add('Highlighted and Available', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
          state: AVAILABILITY_STATES.AVAILABLE,
        },
      } }
    />
  ))
  .add('Highlighted and Unavailable ', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
          state: AVAILABILITY_STATES.UNAVAILABLE,
        },
      } }
    />
  ))
  .add('Highlighted and Halo', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
          halo: true,
        },
      } }
    />
  ))
  .add('Highlighted and Voided', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
          void: true,
        },
      } }
    />
  ))
  .add('Highlighted and Under offer ', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
          bookingRequests: [{
            id: 44240,
            idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
            idea_category: 'popup_bar',
            start_on: '2017-02-20',
            end_on: '2017-04-28',
            primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
            tooltip: 'Offer Accepted',
            complete: false,
          }],
        },
      } }
    />
  ))
  .add('Highlighted and with completed booking', () => (
    <AvailabilityCalendarItem
      highlightedDates={ [today] }
      meta={ {
        [formattedToday]: {
          selected: true,
          bookingRequests: [{
            id: 44241,
            idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
            idea_category: 'popup_bar',
            start_on: '2017-02-20',
            end_on: '2017-04-28',
            primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
            tooltip: 'Offer Accepted',
            complete: true,
          }],
        },
      } }
    />
  ));