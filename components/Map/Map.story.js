import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import BaseMap from './BaseMap';
storiesOf('Map', module)
  .add('Default', () => (
    <div style={ { height: '96vh' } }><BaseMap /></div>
  ))