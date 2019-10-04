import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Video
} from '@appearhere/bloom';

storiesOf('Video', module)
  .add('with controls', () => (
    <Video controls>
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.mp4"
        type="video/mp4"
      />
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.webm"
        type="video/webm"
      />
    </Video>
  ))
  .add('autoplay without controls', () => (
    <Video autoPlay>
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.mp4"
        type="video/mp4"
      />
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.webm"
        type="video/webm"
      />
    </Video>
  ));
