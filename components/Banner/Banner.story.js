import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Banner from './Banner';

storiesOf('Banner', module)
  .add('Default', () => (
    <Banner>
      Important information that you should look at right now
    </Banner>
  ))
  .add('Dark', () => (
    <Banner variant="dark">
      Important information that you should look at right now
    </Banner>
  ))
  .add('Success', () => (
    <Banner context="success">
      You did something right! 👏
    </Banner>
  ))
  .add('Error', () => (
    <Banner context="error">
      Something went wrong 😕
    </Banner>
  ))
  .add('Dismissable', () => (
    <Banner onClose={ action('Closing banner') }>
      Important information that you should look at right now
    </Banner>
  ));