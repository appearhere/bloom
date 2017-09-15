import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Buttons from './Buttons/Buttons';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/buttons" component={ Buttons } />
  </Switch>
);

export default Patterns;
