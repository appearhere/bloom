import React from 'react';
import { storiesOf } from '@storybook/react';
import IndicatorGroup from './IndicatorGroup';

import m from '../../globals/modifiers.css';

const simpleIndicators = [1, 2, 3, 4];

storiesOf('IndicatorGroup', module)
  .add('Default view', () => (
    <IndicatorGroup activeIndicator={2}>
      {indicator => <div>{simpleIndicators.map(i => indicator({ i, key: i }))}</div>}
    </IndicatorGroup>
  ))
  .add('Horizontal', () => (
    <IndicatorGroup activeIndicator={2}>
      {indicator => (
        <div>
          {simpleIndicators.map(i =>
            indicator({
              i,
              key: i,
              className: [m.dib, m.mt0, m.mrs].join(' '),
            }),
          )}
        </div>
      )}
    </IndicatorGroup>
  ));
