import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import classnames from 'classnames';

import Hero from './Hero';
import m from '../../globals/modifiers.css';

storiesOf('Hero', module)
  .add('Default', () => {
    const headingClasses = classnames(
      m.fontLgIv,
      m.fgWhite,
      m.uppercase,
      m.wideSpacing,
    );

    const paraClasses = classnames(
      m.fontRegular,
      m.fgWhite,
    );

    return (
      <Hero
        className={ m.bgBlack }
        backgroundImage="https://unsplash.it/1600/1201"
        caption="A random image from unsplash"
      >
        <h1 className={ headingClasses }>List a space, host an idea</h1>
        <p className={ paraClasses }>
          Join the world's leading online marketplace for short-term space.
        </p>
        <button>lol</button>
        <div style={{
          color: 'white',
          position: 'absolute',
          bottom: '2rem',
          textAlign: 'center',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <p className={ paraClasses }>Look here, son</p> 👇🏻
        </div>
      </Hero>
    );
  })
  .add('with body image', () => {
    const headingClasses = classnames(
      m.fontLgIv,
      m.fgText,
      m.uppercase,
      m.wideSpacing,
    );

    const paraClasses = classnames(
      m.fontRegular,
      m.fgText,
    );

    return (
      <div>
        <Hero
          className={ m.bgWhite }
        >
          <h1 className={ headingClasses }>MacBook</h1>
          <p className={ paraClasses }>
            Light. Years ahead.
          </p>
          <div className={m.pt64}>
            <img style={{ width: '80%' }} src="http://images.apple.com/v/mac/home/t/images/home/macbook_opt_large.jpg" />
          </div>
        </Hero>
      </div>
    );
  });