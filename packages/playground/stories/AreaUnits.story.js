import React from 'react';
import { storiesOf } from '@storybook/react';

import { AreaUnits } from '@appearhere/bloom';

storiesOf('AreaUnits', module)
  .add('Square foot', () => <AreaUnits value="300" unit="sqft" />)
  .add('Meters squared', () => <AreaUnits value="300" unit="m2" />);
