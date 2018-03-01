import React from 'react';
import { storiesOf } from '@storybook/react';
import classnames from 'classnames';

import Hero from './Hero';
import SquareHero from './SquareHero';
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
        className={m.bgBlack}
        backgroundImage="https://unsplash.it/1600/1201"
        caption="A random image from unsplash"
      >
        <h1 className={headingClasses}>List a space, host an idea</h1>
        <p className={paraClasses}>
          Join the world’s leading online marketplace for short-term space.
        </p>
      </Hero>
    );
  })
  .add('Animated', () => {
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
        className={m.bgBlack}
        backgroundImage="https://source.unsplash.com/random/1200x800"
        caption="A random image from unsplash"
        animate
      >
        <h1 className={headingClasses}>List a space, host an idea</h1>
        <p className={paraClasses}>
          Join the world’s leading online marketplace for short-term space.
        </p>
      </Hero>
    );
  })
  .add('<SquareHero />', () => (
    <SquareHero
      image="https://source.unsplash.com/random/1200x800"
      alt=""
    >
      Curators, makers, rule breakers. Questioners & forward thinkers
    </SquareHero>
  ));
