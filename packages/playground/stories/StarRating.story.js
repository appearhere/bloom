import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import { StarRating } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('StarRating', () => (
  <StarRating name="RadioGroup" value={number('Value', 1)} onChange={action('Changing')} />
));
