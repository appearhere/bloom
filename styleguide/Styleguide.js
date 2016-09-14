import React, { Component } from 'react';

import './Styleguide.css';
import Link from 'components/Link/Link';

class Styleguide extends Component {
  render() {
    return (
      <div className="Styleguide">
        <h1>Welcome to Bloom</h1>
        <Link href="https://en.wikipedia.org/wiki/Special:Random">Surprise me!</Link>
      </div>
    );
  }
}

export default Styleguide;
