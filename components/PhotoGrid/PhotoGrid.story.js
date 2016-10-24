import React from 'react';
import { storiesOf } from '@kadira/storybook';

import RandomSix from './RandomSix';

const images = [{
  src: 'http://placekitten.com/150/150',
  alt: '1',
}, {
  src: 'http://placekitten.com/297/297',
  alt: '2',
}, {
  src: 'http://placekitten.com/165/136',
  alt: '3',
}, {
  src: 'http://placekitten.com/146/146',
  alt: '4',
}, {
  src: 'http://placekitten.com/298/218',
  alt: '5',
}, {
  src: 'http://placekitten.com/139/139',
  alt: '6',
}];

storiesOf('Photo grids', module)
  .add('<RandomSix />', () => (
    <RandomSix>{ images }</RandomSix>
  ));