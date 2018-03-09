import React from 'react';
import ReactDOM from 'react-dom';

import Video from './Video';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Video>
      <source src="" />
    </Video>,
    div,
  );
});
