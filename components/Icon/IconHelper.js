import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import invariant from 'invariant';
import css from './Icon.css';

export default iconSet => {
  return class Icon extends Component {
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
        css[name],
      );

      return (
        <span
          { ...rest }
          className={ classes }
          dangerouslySetInnerHTML={ this.createMarkup() }
        />
      );
    }
  }
}