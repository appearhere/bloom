// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './BtnContainer.css';

type Props = {
  className?: string,
  children: React.Node,
  type: 'submit' | 'button' | 'reset' | 'menu',
}

export default class BtnContainer extends React.Component<Props> {
  static defaultProps = {
    type: 'button',
  };

  render() {
    const { className, type, children, ...rest } = this.props;
    const classes = cx(css.root, className);

    return (
      <button className={classes} type={type} {...(rest: any)}>
        {children}
      </button>
    );
  }
}
