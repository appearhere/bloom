//@flow

import * as React from 'react';
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

type WindowTitleProps = {
  className: string,
  children: React.Node
}

export const WindowTitle = ({ className, children, ...rest }: WindowTitleProps) => (
  <span {...rest} className={cx(css.title, className)}>
    {children}
  </span>
);

/**
 * TODO: Figure out react-motion compatible focus trap
 */

type ClassNames = {
  header: string,
  body: string,
  footer: string,
}

type WindowProps = {
  children: React.Node,
  header?: React.Node,
  footer?: React.Node,
  className?: string,
  classNames: ClassNames,
  variant: typeof WINDOW_VARIANT.LIGHT | typeof WINDOW_VARIANT.DARK,
}

export default class Window extends React.Component<WindowProps> {
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
