import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Card from './Card/Card';
import PictureCard from './PictureCard/PictureCard';
import SpaceFeatureCard from './SpaceFeatureCard/SpaceFeatureCard';
import EditorialCard from './EditorialCard/EditorialCard';
import GuideCard from './EditorialCard/GuideCard';
import EventCard from './EditorialCard/EventCard';

storiesOf('Cards', module)
  .add('Default', () => (
    <Card>Hello, world</Card>
  ))
  .add('Default with link', () => (
    <Card href="#">Hello, world</Card>
  ))
  .add('PictureCard', () => (
    <PictureCard
      style={ { minHeight: '10vh' } }
      src="https://source.unsplash.com/random"
    >
      Hello, world
    </PictureCard>
  ))
  .add('PictureCard with link', () => (
    <PictureCard
      style={ { minHeight: '10vh' } }
      href="#"
      src="https://source.unsplash.com/random"
    >
      Hello, world
    </PictureCard>
  ))
  .add('PictureCard with centered content', () => (
    <PictureCard
      style={ { minHeight: '10vh' } }
      src="https://source.unsplash.com/random"
      center
    >
      Hello, world
    </PictureCard>
  ))
  .add('SpaceFeatureCard with link', () => (
    <SpaceFeatureCard
      name="Mulberry Street"
      price="$1500 / day"
      location="New York"
      href="#"
      src="https://source.unsplash.com/random"
    />
  ))
  .add('EditorialCard', () => (
    <EditorialCard
      title="Mulberry Street"
      href="#"
      src="https://source.unsplash.com/random/500x500"
    >
      Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue.
    </EditorialCard>
  ))
  .add('GuideCard locked', () => (
    <GuideCard
      title="Mulberry Street"
      href="#"
      src="https://source.unsplash.com/random/500x500"
      description="Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue."
      unlockCallback={ (e) => {
        e.stopPropagation();
        action('Unlocking')(e);
      } }
    />
  ))
  .add('GuideCard unlocked', () => (
    <GuideCard
      title="Mulberry Street"
      href="#"
      src="https://source.unsplash.com/random/500x500"
      description="Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue."
      downloadCallback={ (e) => {
        e.stopPropagation();
        action('Downloading')(e);
      } }
    />
  ))
  .add('EventCard', () => (
    <EventCard
      title="The Editors"
      href="#"
      src="https://source.unsplash.com/random/500x500"
      description="Nam erat urna, tincidunt eleifend libero ut, posuere dictum augue."
      location="London"
      date="28th August 2016"
      ctaCallback={ (e) => {
        e.stopPropagation();
        action('Redirecting')(e);
      } }
    />
  ));