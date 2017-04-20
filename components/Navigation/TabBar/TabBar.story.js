import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';
import TabBar from './TabBar';
import TabBarItem from './TabBarItem';
import TabBarIconItem from './TabBarIconItem';

const stories = storiesOf('TabBar', module);
stories.addDecorator(withKnobs);

stories
  .add('Default', () => (
    <TabBar activeMarkerOffset={ number('activeMarkerOffset', -1) }>
      <TabBarItem
        href="#search"
        active={ number('Active tab', 0) === 0 }
      >
        Search
      </TabBarItem>
      <TabBarItem
        href="#favourites"
        active={ number('Active tab', 0) === 1 }
      >
        Favourites
      </TabBarItem>
      <TabBarItem
        href="#notification"
        active={ number('Active tab', 0) === 2 }
      >
        Notifications
      </TabBarItem>
    </TabBar>
  ))
  .add('Dark', () => (
    <TabBar variant="dark">
      <TabBarItem
        href="#search"
        active={ number('Active tab', 0) === 0 }
        icon="search"
      >
        Search
      </TabBarItem>
      <TabBarItem
        href="#favourites"
        active={ number('Active tab', 0) === 1 }
        icon="star"
      >
        Favourites
      </TabBarItem>
      <TabBarItem
        href="#notification"
        active={ number('Active tab', 0) === 2 }
        icon="notification"
      >
        Notifications
      </TabBarItem>
    </TabBar>
  ))
  .add('With Icon items', () => (
    <TabBar>
      <TabBarIconItem
        href="#search"
        active={ number('Active tab', 0) === 0 }
        icon="search"
      >
        Search
      </TabBarIconItem>
      <TabBarIconItem
        href="#favourites"
        active={ number('Active tab', 0) === 1 }
        icon="star"
      >
        Favourites
      </TabBarIconItem>
      <TabBarIconItem
        href="#notification"
        active={ number('Active tab', 0) === 2 }
        icon="notification"
      >
        Notifications
      </TabBarIconItem>
    </TabBar>
  ));