// @flow
import * as React from 'react';
import cx from 'classnames';

import Btn from '../Btn/Btn';
import css from './BtnGroup.css';

type Props = {
  className?: string,
  children: React.Element<typeof Btn>,
  context: 'default' | 'primary' | 'danger' | 'action' | 'whiteout',
  priority: 'high' | 'normal',
}

const BtnGroup = (props: Props) => {
  const { children, className, context, priority, ...rest } = props;

  return (
    <div {...rest} className={cx(css[context], className)}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: cx(css.btn, child.props.className),
          variant: 'default',
          context,
          priority,
        }),
      )}
    </div>
  );
};

BtnGroup.defaultProps = {
  context: 'default',
  priority: 'normal',
};

export default BtnGroup;
