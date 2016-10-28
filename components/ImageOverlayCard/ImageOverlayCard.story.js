import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ImageOverlayCard from './ImageOverlayCard';

storiesOf('ImageOverlayCard', module)
  .add('Default button', () => (
    <div>
      <ImageOverlayCard image="https://source.unsplash.com/random/536x800">
        <img src="http://www.apple.com/ac/globalnav/2.0/en_US/images/globalnav/apple/image_large.svg" />
      </ImageOverlayCard>
    </div>
  ));