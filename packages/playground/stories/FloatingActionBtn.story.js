import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FloatingActionBtn, Icon } from '@appearhere/bloom';

storiesOf('FloatingActionBtn', module)
  .add('Default', () => (
    <FloatingActionBtn onClick={action('clicked...')}>
      <Icon name="arrow" />
    </FloatingActionBtn>
  ))
  .add('Primary', () => (
    <FloatingActionBtn onClick={action('clicked...')} context="primary">
      <Icon name="tick" />
    </FloatingActionBtn>
  ))
  .add('Action', () => (
    <FloatingActionBtn onClick={action('clicked...')} context="action">
      <Icon name="search" />
    </FloatingActionBtn>
  ))
  .add('Danger', () => (
    <FloatingActionBtn onClick={action('clicked...')} context="danger">
      <Icon name="cross" />
    </FloatingActionBtn>
  ))
  .add('Whiteout', () => (
    <FloatingActionBtn onClick={action('clicked...')} context="whiteout">
      <Icon name="search" />
    </FloatingActionBtn>
  ));
