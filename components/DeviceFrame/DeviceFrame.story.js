import React from 'react';
import { storiesOf } from '@storybook/react';
import Macbook from './Macbook';
import IPhone from './IPhone';

import iphoneVideo from './nike-screen.mp4';

const macbookImages = [{
  src: 'https://source.unsplash.com/random/1440x900',
  alt: '',
}, {
  src: 'https://source.unsplash.com/random/1440x901',
  alt: '',
}];

const iphoneImages = [{
  src: 'https://source.unsplash.com/random/1500x2668',
  alt: '',
}, {
  src: 'https://source.unsplash.com/random/1500x2669',
  alt: '',
}];


storiesOf('Device frame', module)
  .add('Macbook', () => (
    <Macbook>
      { macbookImages }
    </Macbook>
  ))
  .add('Macbook gold', () => (
    <Macbook deviceColor="gold">
      { macbookImages }
    </Macbook>
  ))
  .add('Macbook Video', () => (
    <Macbook video loop>
      <source
        src="https://s3-eu-west-1.amazonaws.com/appearhere/assets/bloom/example-video.mp4"
        type="video/mp4"
      />
    </Macbook>
  ))
  .add('IPhone', () => (
    <IPhone>
      { iphoneImages }
    </IPhone>
  ))
  .add('IPhone Video', () => (
    <IPhone video loop>
      <source
        src={ iphoneVideo }
        type="video/mp4"
      />
    </IPhone>
  ));
