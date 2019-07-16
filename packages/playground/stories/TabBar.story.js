import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';
import TabBarIconItem from './TabBarIconItem';

const stories = storiesOf('TabBar', module);
stories.addDecorator(withKnobs);

stories
  .add('Default', () => (
    <TabBar activeMarkerOffset={number('activeMarkerOffset', -1)}>
      <TabBarItem href="#search" active={number('Active tab', 0) === 0}>
        Search
      </TabBarItem>
      <TabBarItem href="#favourites" active={number('Active tab', 0) === 1}>
        Favourites
      </TabBarItem>
      <TabBarItem href="#notification" active={number('Active tab', 0) === 2}>
        Notifications
      </TabBarItem>
    </TabBar>
  ))
  .add('Dark', () => (
    <TabBar variant="dark">
      <TabBarItem href="#search" active={number('Active tab', 0) === 0} icon="search">
        Search
      </TabBarItem>
      <TabBarItem href="#favourites" active={number('Active tab', 0) === 1} icon="star">
        Favourites
      </TabBarItem>
      <TabBarItem href="#notification" active={number('Active tab', 0) === 2} icon="notification">
        Notifications
      </TabBarItem>
    </TabBar>
  ))
  .add('Scrollable', () => (
    <TabBar scrollable>
      <TabBarItem href="#all" active={number('Active tab', 0) === 0}>
        All
      </TabBarItem>
      <TabBarItem href="#Supply" active={number('Active tab', 0) === 1}>
        Supply
      </TabBarItem>
      <TabBarItem href="#Concierge" active={number('Active tab', 0) === 2}>
        Concierge
      </TabBarItem>
    </TabBar>
  ))
  .add('With Icon items', () => (
    <TabBar>
      <TabBarIconItem href="#search" active={number('Active tab', 0) === 0} icon="search">
        Search
      </TabBarIconItem>
      <TabBarIconItem href="#favourites" active={number('Active tab', 0) === 1} icon="star">
        Favourites
      </TabBarIconItem>
      <TabBarIconItem
        href="#notification"
        active={number('Active tab', 0) === 2}
        icon="notification"
      >
        Notifications
      </TabBarIconItem>
    </TabBar>
  ));
