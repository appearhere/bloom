import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Macbook from './Macbook';
import IPhone from './IPhone';

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
  .add('IPhone', () => (
    <IPhone>
      { iphoneImages }
    </IPhone>
  ));