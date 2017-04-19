import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DismissablePanel from './DismissablePanel';

storiesOf('DismissablePanel', module)
  .add('Default', () => (
    <DismissablePanel onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </DismissablePanel>
  ))
  .add('Dark', () => (
    <DismissablePanel context="dark" onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </DismissablePanel>
  ))
  .add('Success', () => (
    <DismissablePanel context="success" onClose={ action('Closing banner') }>
      You did something right! 👏
    </DismissablePanel>
  ))
  .add('Error', () => (
    <DismissablePanel context="error" onClose={ action('Closing banner') }>
      Something went wrong 😕
    </DismissablePanel>
  ));