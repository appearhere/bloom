import React from 'react';
import ReactDOM from 'react-dom';

import VideoWithRichPoster from './VideoWithRichPoster';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <VideoWithRichPoster
      videoSrc={
        <source src="" />
      }
      posterSrc={
        <source src="" />
      }
    />,
    div
  );
});