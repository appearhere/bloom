import React from 'react';
import { storiesOf } from '@kadira/storybook';
import cx from 'classnames';

import ProfileCard from './ProfileCard';
import m from '../../globals/modifiers.css';

storiesOf('ProfileCard', module)
  .add('base', () => {
    const nameClasses = cx(
      m.fontSmall,
      m.bold,
      m.uppercase,
    );

    const paraClasses = cx(
      m.fontSmall,
      m.fgGrey,
    );

    return(<ProfileCard image="https://unsplash.it/400/400">
      <h2 className={ nameClasses }>Ross Bailey</h2>
      <p className={ paraClasses }>CEO</p>
      <p className={ paraClasses }>
        I should've known way back when... You know why, David? Because of the
        kids. They called me Mr Glass.
      </p>
    </ProfileCard>)
  });
