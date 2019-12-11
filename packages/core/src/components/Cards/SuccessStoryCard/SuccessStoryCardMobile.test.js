import React from 'react';
import ReactDOM, { render } from 'react-dom';

import SuccessStoryCardMobile from './SuccessStoryCardMobile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<SuccessStoryCardMobile />, div);
});
