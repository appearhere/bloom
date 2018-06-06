import React from 'react';
import { storiesOf } from '@storybook/react';
import FittedImage from './FittedImage';

storiesOf('FittedImage', module)
  .add('`object-fit: cover`', () => (
    <FittedImage
      style={{
        backgroundColor: '#eee',
        objectFit: 'cover',
        width: '100%',
        maxWidth: '500px',
        height: '500px',
      }}
      src="https://source.unsplash.com/random/1600x800"
    />
  ))
  .add('`object-fit: contain`', () => (
    <FittedImage
      style={{
        backgroundColor: '#eee',
        objectFit: 'contain',
        width: '100%',
        maxWidth: '500px',
        height: '500px',
      }}
      src="https://source.unsplash.com/random/1600x800"
    />
  ));
