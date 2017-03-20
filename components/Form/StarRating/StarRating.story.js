import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, number } from '@kadira/storybook-addon-knobs';

import StarRating from './StarRating';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('StarRating', () => (
  <StarRating
    name="RadioGroup"
    value={ number('Value', 1) }
    onChange={ action('Changing') }
  />
));