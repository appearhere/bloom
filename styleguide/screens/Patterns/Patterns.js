import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Badges from './Badges/Badges';
import Buttons from './Buttons/Buttons';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/badges" component={ Badges } />
    <Route path="/patterns/buttons" component={ Buttons } />
  </Switch>
);

export default Patterns;
