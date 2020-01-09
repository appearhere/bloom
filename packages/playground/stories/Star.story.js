import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import { Star } from '@appearhere/bloom';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('Star', () => <Star name="star" value={number('Value', 1)} checked={boolean('Checked', false)} />);
