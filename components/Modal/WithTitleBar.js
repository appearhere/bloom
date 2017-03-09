import React, { Component, PropTypes } from 'react';

import Window from './Window';

import noop from '../../utils/noop';
import css from './WithTitleBar.css';
import Banner from '../Banner/Banner';

/**
 * TODO: Figure out react-motion compatible focus trap
 */
class WindowWithTitleBar extends Component {
  static propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func,
    title: PropTypes.string,
    variant: PropTypes.oneOf(['light', 'dark']),
  };

  static defaultProps = {
    onClose: noop,
    variant: 'light',
  };

  render() {
    const {
      children,
      onClose,
      title,
      variant,
      ...rest,
    } = this.props;

    const classNames = {
      header: css.header,
      body: css.body,
    };

    return (
      <Window
        { ...rest }
        classNames={ classNames }
        variant={ variant }
        header={ (
          <Banner
            variant={ variant }
            className={ css.banner }
            onClose={ onClose }
          >
            { title }
          </Banner>
        ) }
      >
        { children }
      </Window>
    );
  }
}

export default WindowWithTitleBar;