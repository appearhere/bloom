import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';

import Introduction from './Introduction';
import Example from './Example';
import FourOhFour from './404';

export default () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/example">Example</Link></li>
        </ul>
      </nav>
      <div>
        <h1>Bloom</h1>
        <p>v{ `${process.env.npm_package_version}` }</p>
        <Match exactly pattern="/" component={ Introduction } />
        <Match pattern="/example" component={ Example } />

        <Miss component={ FourOhFour } />
      </div>
    </div>
  </BrowserRouter>
);
