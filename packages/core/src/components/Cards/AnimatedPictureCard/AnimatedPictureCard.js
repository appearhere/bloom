//@flow
import React from 'react';
import cx from 'classnames';

import css from './AnimatedPictureCard.css';
import Card from '../Card/Card';

type Props = {
  src: string,
  href: string,
  title: string,
}

const AnimatedPictureCard = (props: Props) => {
  const { src, href, title, ...rest } = props;

  return (
    <Card
      {...(rest: any)}
      href={href}
      className={css.animatedPictureCard}
    >
      <img src={src} />
      <div className={css.title}>{title}</div>
    </Card>
  );
};

export default AnimatedPictureCard;
