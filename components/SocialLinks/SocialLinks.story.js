import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SocialLinks from './SocialLinks';

/* eslint-disable no-undef */
storiesOf('SocialLinks', module)
  .add('Default', () => (
    <SocialLinks
      uri={ window.location.href }
      twitterTweet="lmao"
      twitterVia="realDonaldTrump"
    />
  ));
/* eslint-enable no-undef */