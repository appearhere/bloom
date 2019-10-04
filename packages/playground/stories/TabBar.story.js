import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import {
  Navigation
} from '@appearhere/bloom';

const stories = storiesOf('Navigation.TabBar', module);
stories.addDecorator(withKnobs);

stories
  .add('Default', () => (
    <Navigation.TabBar activeMarkerOffset={number('activeMarkerOffset', -1)}>
      <Navigation.TabBarItem href="#search" active={number('Active tab', 0) === 0}>
        Search
      </Navigation.TabBarItem>
      <Navigation.TabBarItem href="#favourites" active={number('Active tab', 0) === 1}>
        Favourites
      </Navigation.TabBarItem>
      <Navigation.TabBarItem href="#notification" active={number('Active tab', 0) === 2}>
        Notifications
      </Navigation.TabBarItem>
    </Navigation.TabBar>
  ))
  .add('Dark', () => (
    <Navigation.TabBar variant="dark">
      <Navigation.TabBarItem href="#search" active={number('Active tab', 0) === 0} icon="search">
        Search
      </Navigation.TabBarItem>
      <Navigation.TabBarItem href="#favourites" active={number('Active tab', 0) === 1} icon="star">
        Favourites
      </Navigation.TabBarItem>
      <Navigation.TabBarItem href="#notification" active={number('Active tab', 0) === 2} icon="notification">
        Notifications
      </Navigation.TabBarItem>
    </Navigation.TabBar>
  ))
  .add('Scrollable', () => (
    <Navigation.TabBar scrollable>
      <Navigation.TabBarItem href="#all" active={number('Active tab', 0) === 0}>
        All
      </Navigation.TabBarItem>
      <Navigation.TabBarItem href="#Supply" active={number('Active tab', 0) === 1}>
        Supply
      </Navigation.TabBarItem>
      <Navigation.TabBarItem href="#Concierge" active={number('Active tab', 0) === 2}>
        Concierge
      </Navigation.TabBarItem>
    </Navigation.TabBar>
  ))
  .add('With Icon items', () => (
    <Navigation.TabBar>
      <Navigation.TabBarIconItem href="#search" active={number('Active tab', 0) === 0} icon="search">
        Search
      </Navigation.TabBarIconItem>
      <Navigation.TabBarIconItem href="#favourites" active={number('Active tab', 0) === 1} icon="star">
        Favourites
      </Navigation.TabBarIconItem>
      <Navigation.TabBarIconItem
        href="#notification"
        active={number('Active tab', 0) === 2}
        icon="notification"
      >
        Notifications
      </Navigation.TabBarIconItem>
    </Navigation.TabBar>
  ));
