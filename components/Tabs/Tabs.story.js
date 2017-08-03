import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Tabs from './Tabs';
import Tab from './Tab';


storiesOf('Tabs', module)
  .add('Default', () => (
    <div>
      <Tabs onChange={ action('Changed tab') }>
        <Tab label="Sail - AWOLNATION">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Awf45u6zrP0" frameborder="0" allowfullscreen />
        </Tab>
        <Tab label="Will Sasso">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/T6i5qHHXjz0" frameborder="0" allowfullscreen />
        </Tab>
        <Tab label="Go go Power Rangers!">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7Wt6XlVob_E" frameborder="0" allowfullscreen />
        </Tab>
      </Tabs>
    </div>
  ));
