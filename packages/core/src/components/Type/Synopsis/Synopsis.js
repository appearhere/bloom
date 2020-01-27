//@flow

import * as React from 'react';
import cx from 'classnames';

import css from './Synopsis.css';

type Props = {
  title: React.Node,
  children: React.Node,
  className: string,
  level: number,
}

const bodyClasses = cx(css.base, css.body);

const Synopsis = ({ title, children, className, level, ...rest }: Props) => {
  const titleClasses = cx(css.base, css.title);

  return (
    <div className={className} {...(rest: any)}>
      {React.createElement(`h${level}`, { className: titleClasses, ...(rest: any) }, title)}
      <div className={bodyClasses}>{children}</div>
    </div>
  );
};

Synopsis.defaultProps = {
  level: 2,
};

export default Synopsis;
