import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Card from './Card/Card';
import PictureCard from './PictureCard/PictureCard';
import SpaceFeatureCard from './SpaceFeatureCard/SpaceFeatureCard';
import SpaceListingCard from './SpaceListingCard/SpaceListingCard';
import PlaceListingCard from './PlaceListingCard/PlaceListingCard';
import EmptyListingCard from './EmptyListingCard/EmptyListingCard';
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
  .add('EmptyListingCard', () => (
    <EmptyListingCard />
  ))
  .add('SpaceListingCard', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London"
      size="1000 sqft"
      name="Bold Street Shop"
      images={
        [{
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        }, {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        }]
      }
      href="#"
    />
  ))
  .add('SpaceListingCard as part of a place', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London"
      size="1000 sqft"
      name="Bold Street Shop"
      placeLabel="Part of Boxpark"
      placeHref="#"
      images={
        [{
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        }, {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        }]
      }
      href="#"
    />
  ))
  .add('PlaceListingCard', () => (
    <PlaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      priceFromLabel="from"
      location="Shoreditch, London"
      size="1000 sqft"
      name="BOXPARK"
      images={
        [{
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        }, {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        }]
      }
      spaceDetail="2 available spaces"
      href="#"
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
      title="How to PR your Pop Up Shop"
      href="#"
      src="https://source.unsplash.com/random/500x500"
      description={ 'Inside, you’ll find everything you need to know to launch a shop share, ' +
        ' from choosing the right location to setting up the space.' }
      unlockCallback={ (e) => {
        e.stopPropagation();
        action('Unlocking')(e);
      } }
    />
  ))
  .add('GuideCard unlocked', () => (
    <GuideCard
      title="How to PR your Pop Up Shop"
      href="#"
      src="https://source.unsplash.com/random/500x500"
      description={ 'Inside, you’ll find everything you need to know to launch a shop share, ' +
        ' from choosing the right location to setting up the space.' }
      downloadCallback={ (e) => {
        e.stopPropagation();
        action('Downloading')(e);
      } }
    />
  ))
  .add('EventCard', () => (
    <EventCard
      title="Underground Session: The Editors"
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