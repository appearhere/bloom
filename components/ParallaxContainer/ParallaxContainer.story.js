import React from 'react';
import { storiesOf } from '@storybook/react';
import ParallaxContainer from './ParallaxContainer';

storiesOf('ParallaxContainer', module)
  .add('ParallaxContainer', () => (
    <div style={{ height: '200vh' }}>
      <ParallaxContainer speed={0.5}>
        <div
          style={{
            height: '25vh',
            width: '25vw',
            backgroundColor: '#000000',
          }}
        />
      </ParallaxContainer>
      <ParallaxContainer speed={0.1}>
        <div
          style={{
            height: '25vh',
            width: '25vw',
            backgroundColor: '#FAE142',
            marginLeft: '25vw',
          }}
        />
      </ParallaxContainer>
      <ParallaxContainer speed={2}>
        <div
          style={{
            height: '25vh',
            width: '25vw',
            backgroundColor: '#ED2939',
            marginLeft: '50vw',
          }}
        />
      </ParallaxContainer>
    </div>
  ));
