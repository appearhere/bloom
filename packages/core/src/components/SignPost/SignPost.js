//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './SignPost.css';

type Props = {
  title: React.Node,
  children: React.Node,
  className: string,
}

const SignPost = ({ title, children, className, ...rest }: Props) => (
  <div {...rest} className={cx(css.root, className)}>
    <span className={css.title}>{title}</span>
    <div className={css.body}>{children}</div>
  </div>
);

export default SignPost;
