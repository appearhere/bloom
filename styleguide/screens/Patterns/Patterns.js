import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Accessibility from './Accessibility/Accessibility';
import Buttons from './Buttons/Buttons';
import LeftRight from './LeftRight/LeftRight';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/accessibility" component={ Accessibility } />
    <Route path="/patterns/buttons" component={ Buttons } />
    <Route path="/patterns/leftright" component={ LeftRight } />
  </Switch>
);

export default Patterns;
