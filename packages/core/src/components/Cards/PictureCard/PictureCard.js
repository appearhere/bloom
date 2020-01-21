import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './PictureCard.css';
import Card from '../Card/Card';

const PictureCard = props => {
  const { src, href, children, className, center, bottom, style, overlayClassName, bgImage, ...rest } = props;

  return (
    <Card
      {...rest}
      href={href}
      className={cx(
        css.root,
        className,
        href ? css.link : null,
        center ? css.center : null,
        bottom ? css.bottom : null,
      )}
    >
      { !bgImage && <img src={src} /> }
      <div className={css.inner}>{children}</div>
    </Card>
  );
};

PictureCard.defaultProps = {
  bgImage: false,
}

PictureCard.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  center: PropTypes.bool,
  bottom: PropTypes.bool,
  style: PropTypes.object,
  overlayClassName: PropTypes.string,
  bgImage: PropTypes.bool,
};

export default PictureCard;
