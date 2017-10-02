import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Accessibility from './Accessibility/Accessibility';
import Badge from './Badge/Badge';
import Buttons from './Buttons/Buttons';
import InputField from './InputField/InputField';
import Inputs from './Inputs/Inputs';
import LeftRight from './LeftRight/LeftRight';
import Markdown from './Markdown/Markdown';
import Medallion from './Medallion/Medallion';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/accessibility" component={ Accessibility } />
    <Route path="/patterns/badge" component={ Badge } />
    <Route path="/patterns/buttons" component={ Buttons } />
    <Route path="/patterns/input-field" component={ InputField } />
    <Route path="/patterns/inputs" component={ Inputs } />
    <Route path="/patterns/leftright" component={ LeftRight } />
    <Route path="/patterns/markdown" component={ Markdown } />
    <Route path="/patterns/medallion" component={ Medallion } />
  </Switch>
);

export default Patterns;
