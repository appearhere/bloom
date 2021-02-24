import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

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
      {!boolean('Remove Tab', false) && (
        <Tab label="Will Sasso">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T6i5qHHXjz0"
            frameBorder="0"
            allowFullScreen
          />
        </Tab>
      )}
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
)).add('With Initially selected tab', () => (
  <div>
    <Tabs onChange={action('Changed tab')} initialActiveTabIndex={1}>
      <Tab label="Sail - AWOLNATION">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Awf45u6zrP0"
          frameBorder="0"
          allowFullScreen
        />
      </Tab>
      {!boolean('Remove Tab', false) && (
        <Tab label="Will Sasso">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/T6i5qHHXjz0"
            frameBorder="0"
            allowFullScreen
          />
        </Tab>
      )}
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
)).addDecorator(withKnobs);
