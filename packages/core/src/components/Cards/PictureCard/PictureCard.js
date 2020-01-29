// @flow
import * as React from 'react';
import cx from 'classnames';

import css from './PictureCard.css';
import Card from '../Card/Card';

type Props = {
  src?: string,
  href?: string,
  children: React.Node,
  className?: string,
  innerClassName?: string,
  center?: boolean,
  bottom?: boolean,
  style?: Object,
  overlayClassName?: string,
};

const PictureCard = (props: Props) => {
  const {
    src,
    href,
    children,
    className,
    center,
    bottom,
    style,
    overlayClassName,
    ...rest
  } = props;

  return (
    <Card
      {...(rest: any)}
      href={href}
      className={cx(
        css.root,
        className,
        href ? css.link : null,
        center ? css.center : null,
        bottom ? css.bottom : null,
      )}
      style={{
        ...style,
        backgroundImage: src && `url(${src})`,
      }}
    >
      <div className={cx(css.overlay, overlayClassName)} />
      <div className={css.inner}>{children}</div>
    </Card>
  );
};

export default PictureCard;
