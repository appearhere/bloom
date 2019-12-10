import React from 'react';
import { render } from '@testing-library/react';
import GridLayout from './GridLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <GridLayout>
      <span>child</span>
      <span>child</span>
    </GridLayout>,
    div,
  );
});


