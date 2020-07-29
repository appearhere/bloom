import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DismissablePanel } from '@appearhere/bloom';

storiesOf('DismissablePanel', module)
  .add('Default context', () => (
    <DismissablePanel onClose={action('Closing banner')}>
      Important information that you should look at right now
    </DismissablePanel>
  ))
  .add('Blackout context', () => (
    <DismissablePanel context="blackout" onClose={action('Closing banner')}>
      Important information that you should look at right now
    </DismissablePanel>
  ))
  .add('Success context', () => (
    <DismissablePanel context="success" onClose={action('Closing banner')}>
      You did something right! 👏
    </DismissablePanel>
  ))
  .add('Error context', () => (
    <DismissablePanel context="error" onClose={action('Closing banner')}>
      Something went wrong 😕
    </DismissablePanel>
  ))
  .add('With Icon', () => (
    <DismissablePanel icon="price-tag" onClose={action('Closing banner')}>
      What a fabulous icon! 🔥
    </DismissablePanel>
  ));
