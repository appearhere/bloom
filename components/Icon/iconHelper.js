import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classnames from 'classnames';
import warning from 'warning';
import css from './IconCore.css';

export default (iconSet, theme) =>
  class Icon extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      fallback: PropTypes.string,
      className: PropTypes.string,
    };

    constructor(props) {
      super(props);

      warning(props.fallback || iconSet[props.name], `Icon(): No icon exists for ${props.name}`);

      this.createMarkup = this.createMarkup.bind(this);
    }

    createMarkup() {
      const { name, fallback } = this.props;

      return { __html: iconSet[name] || fallback };
    }

    render() {
      const { className, name, fallback, ...rest } = this.props;
      const fallingBack = !iconSet[name] && fallback;

      const classes = classnames(
        css.root,
        theme ? theme.root : null,
        theme ? theme[name] : css[name],
        theme && fallingBack ? theme.fallback : null,
        className,
      );

      /* eslint-disable react/no-danger */
      return <span {...rest} className={classes} dangerouslySetInnerHTML={this.createMarkup()} />;
      /* eslint-enable react/no-danger */
    }
  };
