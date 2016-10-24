import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Markdown from './Markdown';

import guide from './markdown-guide.md';

storiesOf('Markdown', module)
  .add('<Markdown />', () => (
    <Markdown highlightSyntax>{ guide }</Markdown>
  ));