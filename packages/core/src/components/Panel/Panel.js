// @flow

import * as React from 'react';
import cx from 'classnames';
import Icon from '../Icon/Icon';

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
  icon?: string,
}

const Panel = (props: Props) => {
  const { children, className, context, icon, ...rest } = props;

  return (
    <div {...rest} className={cx(css.root, css[context], className)}>
      {icon && (
        <Icon className={css.icon} name={icon} dimensions={{ width: '20px', height: '20px' }} />
      )}
      {children}
    </div>
  );
};

Panel.defaultProps = {
  context: PANEL_CONTEXT.DEFAULT,
};

export default Panel;
