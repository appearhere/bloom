import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './AnimatedPictureCard.css';
import Card from '../Card/Card';

const AnimatedPictureCard = props => {
  const { src, href, title, ...rest } = props;

  return (
    <Card
      {...rest}
      href={href}
      className={css.animatedPictureCard}
    >
      <img src={src} />
      <div className={css.title}>{title}</div>
    </Card>
  );
};

AnimatedPictureCard.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
};

export default AnimatedPictureCard;
