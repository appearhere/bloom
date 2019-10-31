import React from 'react';
import { storiesOf } from '@storybook/react';
import { CollapsibleRow, Radio } from '@appearhere/bloom';

const titleComponent = (
  <div style={{ display: 'flex', justifyContent: 'space-between', flex: 1 }}>
    <div>PDQ Connect</div>
    <div>£100 / wk</div>
  </div>
)

storiesOf('CollapsibleRow', module)
  .add('Default', () => <CollapsibleRow title="Some copy" body="Just for a maximum of 2 PDQ terminals / payment iPads" />)
  .add('With border', () => <CollapsibleRow border title="Some copy" body="Just for a maximum of 2 PDQ terminals / payment iPads" />)
  .add('With title component', () => <CollapsibleRow border title={titleComponent} body="Just for a maximum of 2 PDQ terminals / payment iPads" />)
  .add('With left content', () => <CollapsibleRow left={<Radio />} title="Some copy" body="Just for a maximum of 2 PDQ terminals / payment iPads" />)
  .add('With all content', () => <CollapsibleRow left={<Radio />} border title={titleComponent} body="Just for a maximum of 2 PDQ terminals / payment iPads" />)
  .add('With group', () => (
    <div>
      <CollapsibleRow left={<Radio />} border title={titleComponent} body="Just for a maximum of 2 PDQ terminals / payment iPads" />
      <CollapsibleRow left={<Radio />} border title={titleComponent} body="Just for a maximum of 2 PDQ terminals / payment iPads" />
    </div>
  ))

