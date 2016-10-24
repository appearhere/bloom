import React from 'react';

import Link from '../components/Link/Link';
import css from './Styleguide.css';

const Styleguide = () => (
  <div className={ css.root }>
    <h1>Welcome to Bloom</h1>
    <Link href="https://en.wikipedia.org/wiki/Special:Random">Surprise me!</Link>
  </div>
);

export default Styleguide;
