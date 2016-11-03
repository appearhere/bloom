import React from 'react';
import { storiesOf } from '@kadira/storybook';

import SpaceCard from './SpaceCard';

storiesOf('SpaceCard', module)
  .add('Default', () => (
    <SpaceCard
      name=" Rue De Chazelles"
      image="https://unsplash.it/600/600"
      price="£46/day"
      type="Retail"
      location="London"
      href="#"
    />
  ));