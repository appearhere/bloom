import React, { Component } from 'react';

import m from '../../../globals/modifiers.css';
import css from './Swatch.css';

class Swatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: null,
    };
  }

  componentDidMount() {
    const color = window.getComputedStyle(this.colorBlock).backgroundColor;
    this.setState({ color });
  }

  render() {
    const { color } = this.props;

    const classes = [
      css.colour,
      m[`bg${color}`]
    ].join(' ');

    return (
      <div className={css.root}>
        <div className={classes} ref={c => { this.colorBlock = c; }} />
        <div className={css.color}>
          { color }
        </div>
        <div className={css.color}>
          { this.state.color }
        </div>
      </div>
    );
  }
}

Swatch.propTypes = {};

export default Swatch;