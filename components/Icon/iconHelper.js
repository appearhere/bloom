import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import invariant from 'invariant';
import css from './IconCore.css';

export default (iconSet, theme) => class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);

    invariant(
      iconSet[props.name],
      `Icon(): No icon exists for ${props.name}`
    );

    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() {
    const { name } = this.props;

    return {
      __html: iconSet[name],
    };
  }

  render() {
    const { className, name, ...rest } = this.props;

    const classes = classnames(
      css.root,
      theme ? theme.root : null,
      theme ? theme[name] : css[name],
      className,
    );

    /* eslint-disable react/no-danger */
    return (
      <span
        { ...rest }
        className={ classes }
        dangerouslySetInnerHTML={ this.createMarkup() }
      />
    );
    /* eslint-enable react/no-danger */
  }
};