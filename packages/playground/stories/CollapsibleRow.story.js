import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollapsibleRow, Radio } from '@appearhere/bloom';

storiesOf('CollapsibleRow', module)
  .add('Default', () => <CollapsibleRow left={<Radio />} title="Some copy" body="Just for a maximum of 2 PDQ terminals / payment iPads" />)

