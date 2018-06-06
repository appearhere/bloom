import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Star from './Star';

const stories = storiesOf('FormComponents', module);
stories.addDecorator(withKnobs);

stories.add('Star', () => <Star checked={boolean('Checked', false)} />);
