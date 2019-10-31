import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollapsibleRow, Radio } from '@appearhere/bloom';

const titleComponent = (
  <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
    <div>Collapsible title</div>
    <div>£100 / wk</div>
  </div>
)

storiesOf('CollapsibleRow', module)
  .add('Default', () => <CollapsibleRow title="Collapsible title" body="Lorem ipsum dolor sit amet, consectetur adipiscing ielt" />)
  .add('With title component', () => <CollapsibleRow title={titleComponent} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />)
  .add('With left content', () => <CollapsibleRow left={<Radio />} title="Collapsible title" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />)
  .add('Opened by default', () => <CollapsibleRow opened left={<Radio />} title="Collapsible title" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />)

