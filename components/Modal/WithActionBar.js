import React, { Component, PropTypes } from 'react';

import Window, { WINDOW_VARIANT } from './Window';
import Panel, { PANEL_CONTEXT } from '../Panel/Panel';
import css from './WithActionBar.css';

const WINDOW_VARIANT_TO_PANEL_CONTEXT = {
  [WINDOW_VARIANT.LIGHT]: PANEL_CONTEXT.DEFAULT,
  [WINDOW_VARIANT.DARK]: PANEL_CONTEXT.BLACKOUT,
};

/**
 * TODO: Figure out react-motion compatible focus trap
 */
class WindowWithActionBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    actions: PropTypes.node,
    variant: PropTypes.oneOf([
      WINDOW_VARIANT.LIGHT,
      WINDOW_VARIANT.DARK,
    ]),
  };

  static defaultProps = {
    variant: WINDOW_VARIANT.LIGHT,
  };

  render() {
    const {
      children,
      actions,
      variant,
      ...rest,
    } = this.props;

    const classNames = {
      footer: css.footer,
      body: css.body,
    };

    return (
      <Window
        { ...rest }
        classNames={ classNames }
        variant={ variant }
        footer={ (
          <Panel
            context={ WINDOW_VARIANT_TO_PANEL_CONTEXT[variant] }
            className={ css.banner }
          >
            { actions }
          </Panel>
        ) }
      >
        { children }
      </Window>
    );
  }
}

export default WindowWithActionBar;