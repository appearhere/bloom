import React from 'react';
import { storiesOf } from '@kadira/storybook';
import cx from 'classnames';

import SocialLinks from './SocialLinks';

import m from '../../globals/modifiers.css';

/* eslint-disable no-undef */
storiesOf('SocialLinks', module)
  .add('Default', () => (
    <SocialLinks
      uri={ window.location.href }
      twitterTweet="lmao"
      twitterVia="realDonaldTrump"
    />
  ))
  .add('Dark', () => (
    <div className={ cx(m.bgBlack, m.paRegular) }>
      <SocialLinks
        uri={ window.location.href }
        twitterTweet="lmao"
        twitterVia="realDonaldTrump"
        variant="dark"
      />
    </div>
  ));
/* eslint-enable no-undef */
