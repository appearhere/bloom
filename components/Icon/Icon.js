/**
 * Inspiration taken from https://github.com/PactCoffee/loggins/tree/master/components/Icon
 */

import React, { Component } from 'react';
import invariant from 'invariant';

import css from './Icon.css';
import icons from './icons';

export default class Icon extends Component {
  constructor(props) {
    super(props);
    invariant(
      icons[props.name],
      `Icon(): No icon exists for "${props.name}"`
    );
  }

  render() {
    const { className, name, ...rest } = this.props;

    const classes = [
      css.root,
      css[name],
      className || ''
    ].join(' ');

    return (
      <span
        {...rest}
        className={classes}
        dangerouslySetInnerHTML={{ __html: icons[name] }}
      />
    );
  }
}