import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from '../Icon/Icon';

storiesOf('ScreenReadable', module)
  .add('default view', () => (
    <Icon name="example" />
  ));