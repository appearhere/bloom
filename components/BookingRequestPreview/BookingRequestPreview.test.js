import React from 'react';
import { render } from 'react-dom';

import BookingRequestPreview from './BookingRequestPreview';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<BookingRequestPreview bookingRequests={ [] } />, div);
});
