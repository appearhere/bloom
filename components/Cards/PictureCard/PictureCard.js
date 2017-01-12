import React, { PropTypes } from 'react';
import cx from 'classnames';

import css from './PictureCard.css';
import Card from '../Card/Card';

const PictureCard = (props) => {
  const {
    src,
    href,
    children,
    className,
    center,
    style,
    ...rest
  } = props;

  return (
    <Card
      { ...rest }
      href={ href }
      className={ cx(
        css.root,
        className,
        href ? css.link : null,
        center ? css.center : null,
      ) }
      style={ {
        ...style,
        backgroundImage: `url(${src})`,
      } }
    >
      <div className={ css.overlay } />
      <div className={ css.inner }>
        { children }
      </div>
    </Card>
  );
};

PictureCard.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  center: PropTypes.bool,
  style: PropTypes.object,
};

export default PictureCard;