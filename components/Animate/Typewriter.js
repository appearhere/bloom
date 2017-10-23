import PropTypes from 'prop-types';
import React, { Component } from 'react';
import uniqueId from 'lodash/fp/uniqueId';

import css from './Typewriter.css';

export default class Typewriter extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    duration: PropTypes.number,
  };

  static defaultProps = {
    duration: 25,
  };

  constructor(props) {
    super(props);

    this.id = uniqueId('Typewriter');
  }

  render() {
    const { children, duration, ...rest } = this.props;
    const letters = [...children];

    return (
      <span { ...rest }>
        { letters.map((letter, i) => (
          <span
            key={ uniqueId(`${this.id}-${letter}`) }
            className={ css.animation }
            style={ {
              animationDuration: `${duration}ms`,
              animationDelay: `${duration * (i * 1.8)}ms`,
            } }
          >
            { letter }
          </span>
        )) }
      </span>
    );
  }
}
