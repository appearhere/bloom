import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconLink } from '@appearhere/bloom';

const stories = storiesOf('IconLink', module);

const inputTypes = ['text', 'email', 'password', 'search', 'url', 'textarea'];

stories
  .add('default', () => (
    <IconLink
      iconName="arrow-right"
      text="hello"
      href="http://www.google.com"
    />
  ))
  .add('inverted', () => (
    <div style={{ background: 'black', padding: 10 }}>
      <IconLink
        iconName="arrow-right"
        text="goodbye"
        inverted
        href="http://www.google.com"
      />
    </div>
  ));
