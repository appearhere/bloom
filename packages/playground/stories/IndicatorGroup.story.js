import React from 'react';
import { storiesOf } from '@storybook/react';
import { Indicators, Modifiers as m } from '@appearhere/bloom';

const simpleIndicators = [1, 2, 3, 4];

storiesOf('IndicatorGroup', module)
  .add('Default view', () => (
    <Indicators.IndicatorGroup activeIndicator={2}>
      {indicator => <div>{simpleIndicators.map(i => indicator({ i, key: i }))}</div>}
    </Indicators.IndicatorGroup>
  ))
  .add('Horizontal', () => (
    <Indicators.IndicatorGroup activeIndicator={2}>
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
    </Indicators.IndicatorGroup>
  ));
