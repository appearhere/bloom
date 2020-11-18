// @flow
import * as React from 'react';
import cx from 'classnames';
import css from './Card.css';

type Props = {
  className?: string,
  href?: string,
  target?: '_blank' | '_self' | '_parent' | '_top',
  children: React.Node,
}

const Card = ({ className, href, target, children, ...rest }: Props) => {
  const Component = href ? 'a' : 'div';

  const classes = cx(css.root, href ? css.link : null, className);

  return (
    <Component {...(rest: any)} className={classes} href={href} target={href ? target : null}>
      {children}
    </Component>
  );
};

Card.defaultProps = {
  target: '_self',
};

export default Card;
