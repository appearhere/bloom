import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Notification from './Notification';

storiesOf('Notification', module)
  .add('Default', () => (
    <Notification onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </Notification>
  ))
  .add('Dark', () => (
    <Notification context="dark" onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </Notification>
  ))
  .add('Success', () => (
    <Notification context="success" onClose={ action('Closing banner') }>
      You did something right! 👏
    </Notification>
  ))
  .add('Error', () => (
    <Notification context="error" onClose={ action('Closing banner') }>
      Something went wrong 😕
    </Notification>
  ));