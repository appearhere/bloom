import React, { Component, PropTypes } from 'react';

import Window from './Window';
import css from './WithActionBar.css';
import Banner from '../Banner/Banner';


/**
 * TODO: Figure out react-motion compatible focus trap
 */
class WindowWithActionBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    actions: PropTypes.node,
    variant: PropTypes.oneOf(['light', 'dark']),
  };

  static defaultProps = {
    variant: 'light',
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
          <Banner
            variant={ variant }
            className={ css.banner }
          >
            { actions }
          </Banner>
        ) }
      >
        { children }
      </Window>
    );
  }
}

export default WindowWithActionBar;