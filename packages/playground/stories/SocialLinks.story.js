import React from 'react';
import { storiesOf } from '@storybook/react';
import cx from 'classnames';

import {
  SocialLinks,
  Modifiers as m
} from '@appearhere/bloom';

/* eslint-disable no-undef */
storiesOf('SocialLinks', module)
  .add('Default', () => (
    <SocialLinks uri={window.location.href} twitterTweet="lmao" twitterVia="realDonaldTrump" />
  ))
  .add('Dark', () => (
    <div className={cx(m.bgBlack, m.paRegular)}>
      <SocialLinks
        uri={window.location.href}
        twitterTweet="lmao"
        twitterVia="realDonaldTrump"
        variant="dark"
      />
    </div>
  ));
/* eslint-enable no-undef */
