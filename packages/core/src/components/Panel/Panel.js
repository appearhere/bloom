// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Panel.css';

export const PANEL_CONTEXT = {
  DEFAULT: 'default',
  BLACKOUT: 'blackout',
  ERROR: 'error',
  SUCCESS: 'success',
};

type Props = {
  className?: string,
  context:
    typeof PANEL_CONTEXT.DEFAULT |
    typeof PANEL_CONTEXT.BLACKOUT |
    typeof PANEL_CONTEXT.ERROR |
    typeof PANEL_CONTEXT.SUCCESS,
  children: React.Node,
}

const Panel = (props: Props) => {
  const { children, className, context, ...rest } = props;

  return (
    <div {...rest} className={cx(className, css.root, css[context])}>
      {children}
    </div>
  );
};

Panel.defaultProps = {
  context: PANEL_CONTEXT.DEFAULT,
};

export default Panel;
