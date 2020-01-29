// @flow

import * as React from 'react';
import cx from 'classnames';

import Wrapper from '../Wrapper/Wrapper';

import css from './Moment.css';
import Icon from '../Icon/Icon';

type Props = {
  icon: string,
  title: React.Node,
  children: React.Node,
  className?: string,
}

const Moment = ({ icon, title, children, className }: Props) => (
  <Wrapper className={cx(css.root, className)}>
    <div className={css.inner}>
      <div className={css.header}>
        <Icon name={icon} className={css.icon} />
        <div className={css.title}>{title}</div>
      </div>
      <div className={css.body}>{children}</div>
    </div>
  </Wrapper>
);

Moment.defaultProps = {
  icon: 'tick-c',
};

export default Moment;
