import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './Panel.css';

export const PANEL_CONTEXT = {
  DEFAULT: 'default',
  BLACKOUT: 'blackout',
  ERROR: 'error',
  SUCCESS: 'success',
};

const Panel = (props) => {
  const {
    children,
    className,
    context,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={cx(
        css.root,
        css[context],
        className,
      )}
    >
      { children }
    </div>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
  context: PropTypes.oneOf([
    PANEL_CONTEXT.DEFAULT,
    PANEL_CONTEXT.BLACKOUT,
    PANEL_CONTEXT.ERROR,
    PANEL_CONTEXT.SUCCESS,
  ]),
  children: PropTypes.node,
};

Panel.defaultProps = {
  context: PANEL_CONTEXT.DEFAULT,
};

export default Panel;
