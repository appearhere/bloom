import PropTypes from 'prop-types';
import React, { Children } from 'react';
import cx from 'classnames';
import warning from 'warning';
import { Motion, spring } from 'react-motion';

import { SIBLING_TRANSITION as SPRING_CONFIG } from '../../../constants/springs';
import css from './TabBar.css';

const TabBar = ({ children, variant, activeMarkerOffset, scrollable, className }) => {
  const tabWidth = scrollable ? 100 / children.length * 2 : 100 / children.length;
  const activeTabs = children
    .map((child, i) => {
      if (child.props.active === true) return i;
      return false;
    })
    .filter(originalIndex => originalIndex !== false);

  const activeTabIndex = activeTabs[0];

  warning(activeTabs.length < 2, '`<TabBar />`: has multiple active tabs');

  return (
    <div className={cx(css.root, css[variant], scrollable ? css.scrollable : null)}>
      <div className={cx(css.bar, className)}>
        {Children.map(children, (child, i) => (
          <div
            className={cx(
              css.link,
              activeTabIndex === i ? css.active : null,
              scrollable && i === 0 ? css.scrollableLink : null,
            )}
            style={{
              width: `${tabWidth}%`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      <Motion
        defaultStyle={{
          x: 0,
        }}
        style={{
          x: spring(activeTabIndex * 100, SPRING_CONFIG),
        }}
      >
        {({ x }) => (
          <div
            className={cx(css.underline, scrollable ? css.scrollableUnderline : null)}
            style={{
              width: `${tabWidth}%`,
              transform: `translate3d(${x}%, ${activeMarkerOffset}px, 0)`,
            }}
          />
        )}
      </Motion>
    </div>
  );
};

TabBar.propTypes = {
  children: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  activeMarkerOffset: PropTypes.number,
  scrollable: PropTypes.bool,
};

TabBar.defaultProps = {
  variant: 'light',
  activeMarkerOffset: -1,
  scrollable: false,
};

export default TabBar;
