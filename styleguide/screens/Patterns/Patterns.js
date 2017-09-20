import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Accessibility from './Accessibility/Accessibility';
import Buttons from './Buttons/Buttons';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/accessibility" component={ Accessibility } />
    <Route path="/patterns/buttons" component={ Buttons } />
  </Switch>
);

export default Patterns;
