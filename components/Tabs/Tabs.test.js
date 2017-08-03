import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import Tab from './Tab';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Tabs>
      <Tab />
    </Tabs>,
    div
  );
});
