import React from 'react';
import ReactDOM from 'react-dom';
import SectionHeader from './SectionHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectionHeader title="" />, div);
});
