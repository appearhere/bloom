import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Medallion } from '@appearhere/bloom';

const stories = storiesOf('Medallion', module);
stories.addDecorator(withKnobs);

stories
  .add('Light Medallion', () => <Medallion>{number('children', 2)}</Medallion>)
  .add('Dark Medallion', () => <Medallion variant="dark">{number('children', 2)}</Medallion>);
