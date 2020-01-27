//@flow

import React, { Component } from 'react';
import uniqueId from 'lodash/fp/uniqueId';

import css from './Typewriter.css';

type Props = {
  children: string,
  duration: number,
}

export default class Typewriter extends Component<Props> {
  id: string;

  static defaultProps = {
    duration: 25,
  };

  constructor(props: Props) {
    super(props);

    this.id = uniqueId('Typewriter');
  }

  render() {
    const { children, duration, ...rest } = this.props;
    const letters = [...children];

    return (
      <span {...rest}>
        {letters.map((letter, i) => (
          <span
            key={uniqueId(`${this.id}-${letter}`)}
            className={css.animation}
            style={{
              animationDuration: `${duration}ms`,
              animationDelay: `${duration * (i * 1.8)}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    );
  }
}
