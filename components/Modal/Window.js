import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import css from './Window.css';

/**
 * TODO: Figure out react-motion compatible focus trap
 */
export default class Window extends Component {
  static propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(['light', 'dark']),
    header: PropTypes.node,
    footer: PropTypes.node,
    className: PropTypes.string,
    classNames: PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.string,
      footer: PropTypes.string,
    }),
  };

  static defaultProps = {
    classNames: {
      header: '',
      body: '',
      footer: '',
    },
    variant: 'light',
  };

  render() {
    const {
      header,
      footer,
      children: body,
      variant,
      className,
      classNames,
      ...rest,
    } = this.props;

    return (
      <div className={ cx(css.root, css[variant], className) } { ...rest }>
        { header && (
          <div className={ cx(css.header, classNames.header) }>
            { header }
          </div>
        ) }
        { body && (
          <div className={ cx(css.body, classNames.body) }>
            { body }
          </div>
        ) }
        { footer && (
          <div className={ cx(css.footer, classNames.footer) }>
            { footer }
          </div>
        ) }
      </div>
    );
  }
}