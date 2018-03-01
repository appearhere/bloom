import React from 'react';
import ReactDOM from 'react-dom';

import noop from '../../../utils/noop';
import PlayBtn from './PlayBtn';

/**
 * TODO:
 *
 * Test which callback is fired when in a paused and unpaused
 * state (based on the `paused` prop).
 *
 * Consider [enzyme](http://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html)
 * for this purpose
 */

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <PlayBtn
      play={noop}
      pause={noop}
      paused
    />,
    div
  );
});
