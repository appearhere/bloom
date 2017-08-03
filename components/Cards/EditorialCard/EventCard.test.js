import React from 'react';
import { render } from 'react-dom';

import EventCard from './EventCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <EventCard
      title=""
      src=""
      date=""
      location=""
    />,
    div
  );
});
