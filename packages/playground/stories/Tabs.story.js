import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Tabs,
  Tab
} from '@appearhere/bloom';

storiesOf('Tabs', module).add('Default', () => (
  <div>
    <Tabs onChange={action('Changed tab')}>
      <Tab label="Sail - AWOLNATION">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Awf45u6zrP0"
          frameBorder="0"
          allowFullScreen
        />
      </Tab>
      <Tab label="Will Sasso">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/T6i5qHHXjz0"
          frameBorder="0"
          allowFullScreen
        />
      </Tab>
      <Tab label="Go go Power Rangers!">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7Wt6XlVob_E"
          frameBorder="0"
          allowFullScreen
        />
      </Tab>
    </Tabs>
  </div>
));
