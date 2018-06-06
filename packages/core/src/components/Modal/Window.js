import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

import Panel, { PANEL_CONTEXT } from '../Panel/Panel';
import css from './Window.css';

export const WINDOW_VARIANT = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const WINDOW_VARIANT_TO_PANEL_CONTEXT = {
  [WINDOW_VARIANT.LIGHT]: PANEL_CONTEXT.DEFAULT,
  [WINDOW_VARIANT.DARK]: PANEL_CONTEXT.BLACKOUT,
};

export const WindowTitle = ({ className, children, ...rest }) => (
  <span {...rest} className={cx(css.title, className)}>
    {children}
  </span>
);

WindowTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

/**
 * TODO: Figure out react-motion compatible focus trap
 */
export default class Window extends Component {
  static propTypes = {
    children: PropTypes.node,
    header: PropTypes.node,
    footer: PropTypes.node,
    className: PropTypes.string,
    classNames: PropTypes.shape({
      header: PropTypes.string,
      body: PropTypes.string,
      footer: PropTypes.string,
    }),
    variant: PropTypes.oneOf([WINDOW_VARIANT.LIGHT, WINDOW_VARIANT.DARK]),
  };

  static defaultProps = {
    classNames: {
      header: '',
      body: '',
      footer: '',
    },
    variant: WINDOW_VARIANT.LIGHT,
  };

  render() {
    const { header, footer, children: body, variant, className, classNames, ...rest } = this.props;

    return (
      <div
        {...rest}
        className={cx(
          css.root,
          css[variant],
          header ? css.hasHeader : null,
          footer ? css.hasFooter : null,
          className,
        )}
      >
        {header && (
          <Panel
            context={WINDOW_VARIANT_TO_PANEL_CONTEXT[variant]}
            className={cx(css.header, classNames.header)}
          >
            {header}
          </Panel>
        )}
        {body && <div className={cx(css.body, classNames.body)}>{body}</div>}
        {footer && (
          <Panel
            context={WINDOW_VARIANT_TO_PANEL_CONTEXT[variant]}
            className={cx(css.footer, classNames.footer)}
          >
            {footer}
          </Panel>
        )}
      </div>
    );
  }
}
