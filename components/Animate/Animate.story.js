import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';

import Sunrise from './Sunrise';
import m from 'globals/modifiers.css';

const sunrisePanels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

storiesOf('Animation', module)
  .add('Sunrise', () => (
    <div>
      { sunrisePanels.map(() => (
        <Sunrise percent={ 50 }>
          <div
            className={ m.bgPrimary }
            style={ {
              width: '300px',
              height: '400px',
              marginRight: '2%',
              marginTop: '2rem',
            } }
          />
        </Sunrise>
      )) }
    </div>
  ))
  .add('Swap', () => (
    <div>
      <p>See <code>&lt;Swap /&gt;</code> in action in the <code>&lt;GridFader /&gt;</code> component</p>
      <button onClick={ linkTo('GridFader', 'First') }>Go to GridFader</button>
    </div>
  ));