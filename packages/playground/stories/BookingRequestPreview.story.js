import React from 'react';
import { storiesOf } from '@storybook/react';
import { BookingRequestPreview } from '@appearhere/bloom';

storiesOf('BookingRequestPreview', module).add('Default', () => (
  <BookingRequestPreview
    bookingRequests={[
      {
        id: 44241,
        idea_name: 'Tiny TY (like Little Waitrose who we love, love, love)',
        idea_category: 'popup_bar',
        start_on: '2017-02-20',
        end_on: '2017-04-28',
        primary_photo_thumbnail_url: 'https://source.unsplash.com/random/100x100',
        tooltip: 'Offer Accepted',
        complete: true,
      },
      {
        id: 44242,
        idea_name: "Gordo's love shack",
        idea_category: 'popup_bar',
        start_on: '2017-02-20',
        end_on: '2017-04-28',
        primary_photo_thumbnail_url: 'https://source.unsplash.com/random/150x101',
        tooltip: 'Booked',
        complete: true,
      },
      {
        id: 44243,
        idea_name: "Nique's fish bar",
        idea_category: 'popup_bar',
        start_on: '2017-02-20',
        end_on: '2017-04-28',
        primary_photo_thumbnail_url: 'https://source.unsplash.com/random/150x150',
        tooltip: 'Booked',
        complete: true,
      },
    ]}
  />
));
