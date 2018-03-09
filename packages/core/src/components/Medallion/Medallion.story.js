import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Medallion from './Medallion';

const stories = storiesOf('Medallion', module);
stories.addDecorator(withKnobs);

stories
  .add('Light Medallion', () => <Medallion>{number('children', 2)}</Medallion>)
  .add('Dark Medallion', () => <Medallion variant="dark">{number('children', 2)}</Medallion>);
