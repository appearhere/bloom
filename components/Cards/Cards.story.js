import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Card from './Card';
import LinkedCard from './LinkedCard';
import SpaceCard from './SpaceCard';

storiesOf('Card', module)
  .add('Plain', () => (
    <Card image="https://source.unsplash.com/random/536x800">
      Hello, world
    </Card>
  ))
  .add('with Link', () => (
    <LinkedCard href="#" image="https://source.unsplash.com/random/536x800">
      Hello, world
    </LinkedCard>
  ))
  .add('SpaceCard', () => (
    <SpaceCard
      name="Rue De Chazelles"
      image="https://unsplash.it/600/600"
      price="£46/day"
      location="London"
      href="#"
    />
  ));
