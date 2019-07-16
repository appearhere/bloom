import React from 'react';
import { storiesOf } from '@storybook/react';

import { Markdown } from '@appearhere/bloom';

import guide from './markdown-guide.md';

storiesOf('Markdown', module).add('<Markdown />', () => <Markdown>{guide}</Markdown>);
