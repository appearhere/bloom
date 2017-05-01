import React from 'react';
import { render } from 'react-dom';

import ProfileCard from './ProfileCard';

it('renders', () => {
  const div = document.createElement('div');
  render(
    <ProfileCard image="https://unsplash.it/300/300">
      <p>Make ideas happen</p>
    </ProfileCard>,
    div);
  });