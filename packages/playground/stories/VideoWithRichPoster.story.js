import React from 'react';
import { storiesOf } from '@storybook/react';
import { VideoWithRichPoster } from '@appearhere/bloom';

storiesOf('VideoWithRichPoster', module).add('Default', () => (
  <VideoWithRichPoster
    posterSrc={[
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video-rich-poster.mp4"
        type="video/mp4"
      />,
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video-rich-poster.webm"
        type="video/webm"
      />,
    ]}
    videoSrc={[
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.mp4"
        type="video/mp4"
      />,
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.webm"
        type="video/webm"
      />,
    ]}
  />
));
