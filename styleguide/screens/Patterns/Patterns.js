import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Accessibility from './Accessibility/Accessibility';
import Buttons from './Buttons/Buttons';
import LeftRight from './LeftRight/LeftRight';
import Markdown from './Markdown/Markdown';

const Patterns = () => (
  <Switch>
    <Route path="/patterns/accessibility" component={ Accessibility } />
    <Route path="/patterns/buttons" component={ Buttons } />
    <Route path="/patterns/leftright" component={ LeftRight } />
    <Route path="/patterns/markdown" component={ Markdown } />
  </Switch>
);

export default Patterns;
