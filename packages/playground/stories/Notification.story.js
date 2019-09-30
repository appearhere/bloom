import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Notification } from '@appearhere/bloom';

storiesOf('Notification', module)
  .add('Default context', () => (
    <Notification onClose={action('Closing banner')}>
      Important information that you should look at right now
    </Notification>
  ))
  .add('Blackout context', () => (
    <Notification context="blackout" onClose={action('Closing banner')}>
      Important information that you should look at right now
    </Notification>
  ))
  .add('Success context', () => (
    <Notification context="success" onClose={action('Closing banner')}>
      You did something right! 👏
    </Notification>
  ))
  .add('Error context', () => (
    <Notification context="error" onClose={action('Closing banner')}>
      Something went wrong 😕
    </Notification>
  ));
