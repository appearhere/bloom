import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Badge,
  Card,
  PictureCard,
  SpaceFeatureCard,
  SpaceListingCard,
  CondensedSpaceCard,
  PlaceListingCard,
  EmptyListingCard,
  EditorialCard,
  GuideCard,
  EventCard
} from '@appearhere/bloom';

storiesOf('Cards', module)
  .add('Default', () => <Card>Hello, world</Card>)
  .add('Default with link', () => <Card href="#">Hello, world</Card>)
  .add('PictureCard', () => (
    <PictureCard style={{ minHeight: '10vh' }} src="https://source.unsplash.com/random">
      Hello, world
    </PictureCard>
  ))
  .add('PictureCard with link', () => (
    <PictureCard style={{ minHeight: '10vh' }} href="#" src="https://source.unsplash.com/random">
      Hello, world
    </PictureCard>
  ))
  .add('PictureCard with bottom content', () => (
    <PictureCard style={{ minHeight: '10vh' }} src="https://source.unsplash.com/random" bottom>
      Hello, world
    </PictureCard>
  ))
  .add('PictureCard with centered content', () => (
    <PictureCard style={{ minHeight: '10vh' }} src="https://source.unsplash.com/random" center>
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
  .add('EmptyListingCard', () => <EmptyListingCard />)
  .add('SpaceListingCard', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London in the Greater London Area"
      size="1000 sqft"
      name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
    />
  ))
  .add('SpaceListingCard - Special variant', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London in the Greater London Area"
      size="1000 sqft"
      name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
      variant="special"
    />
  ))
  .add('SpaceListingCard with badge', () => (
    <SpaceListingCard
      price="$10,000,00000000000000000000000"
      priceUnit="/day"
      badge={
        <Badge context="primary" hollow={false}>
          New
        </Badge>
      }
      location="Shoreditch, London in the Greater London Area"
      size="1000 sqft"
      name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
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
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
    />
  ))
  .add('SpaceListingCard with additional actions', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London"
      size="1000 sqft"
      name="Bold Street Shop"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
    >
      <button>Save space</button>
    </SpaceListingCard>
  ))
  .add('Favouritable SpaceListingCard', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London"
      size="1000 sqft"
      name="Bold Street Shop"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
      favouriteable
    />
  ))
  .add('Favouritable SpaceListingCard as a favourite', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London"
      size="1000 sqft"
      name="Bold Street Shop"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
      favourite
      favouriteable
    />
  ))
  .add('SpaceListingCard with onClick prop', () => (
    <SpaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      location="Shoreditch, London"
      size="1000 sqft"
      name="Bold Street Shop"
      onClick={action('Clicked called with (e, href)')}
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello2',
        },
        {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        },
        {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        },
      ]}
      href="#"
    >
      <button>Save space</button>
    </SpaceListingCard>
  ))
  .add('CondensedSpaceCard', () => (
    <CondensedSpaceCard
      price="$10,000,000"
      priceUnit="/day"
      name="Bold Street Shop"
      placeLabel="Part of Boxpark"
      placeHref="#"
      images={[
        {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello',
        },
      ]}
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
      imageSrc="https://source.unsplash.com/random/500x500"
      spaceDetail="2 available spaces"
      href="#"
    />
  ))
  .add('PlaceListingCard with onClick', () => (
    <PlaceListingCard
      price="$10,000,000"
      priceUnit="/day"
      priceFromLabel="from"
      location="Shoreditch, London in the Greater London Area"
      size="1000 sqft"
      name="A really long Bold Street Shop, maybe the biggest shop you've ever seen"
      imageSrc="https://source.unsplash.com/random/500x500"
      spaceDetail="2 available spaces"
      href="#"
      onClick={action('place click')}
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
      description={
        'Inside, you’ll find everything you need to know to launch a shop share, ' +
        ' from choosing the right location to setting up the space.'
      }
      unlockCallback={e => {
        e.stopPropagation();
        action('Unlocking')(e);
      }}
    />
  ))
  .add('GuideCard unlocked', () => (
    <GuideCard
      title="How to PR your Pop Up Shop"
      href="#"
      src="https://source.unsplash.com/random/500x500"
      description={
        'Inside, you’ll find everything you need to know to launch a shop share, ' +
        ' from choosing the right location to setting up the space.'
      }
      downloadCallback={e => {
        e.stopPropagation();
        action('Downloading')(e);
      }}
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
      ctaCallback={e => {
        e.stopPropagation();
        action('Redirecting')(e);
      }}
    />
  ));
