import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import css from './CondensedSpaceCard.css';

import LeftRight from '../../LeftRight/LeftRight';
import FittedImage from '../../FittedImage/FittedImage';

const CondensedSpaceCard = (props) => {
  const {
    href,
    images,
    name,
    price,
    priceFromLabel,
    priceUnit,
    className,
  } = props;

  /* eslint-disable react/jsx-no-target-blank */
  return (
    <a
      href={href}
      className={cx(css.root, className)}
      title={name}
      target="_blank"
    >
      <LeftRight
        primarySide="left"
        leftChildren={
          images.length > 0 && (
            <FittedImage
              className={css.image}
              src={images[0].src}
              alt={images[0].alt}
            />
          )
        }
        rightChildren={
          <div className={css.body}>
            <div className={css.name}>
              { priceFromLabel && <span className={css.priceFromLabel}>{ priceFromLabel }</span> }
              <span className={css.price}>{ price }</span>
              { '\u00a0' }
              <span className={css.priceUnit}>{ priceUnit }</span>
            </div>
            <div className={css.name}>{ name }</div>
          </div>
        }
      />
    </a>
  );
  /* eslint-enable react/jsx-no-target-blank */
};

CondensedSpaceCard.propTypes = {
  href: PropTypes.string,
  images: PropTypes.array,
  name: PropTypes.string,
  price: PropTypes.string,
  className: PropTypes.string,
  priceFromLabel: PropTypes.string,
  priceUnit: PropTypes.string,
};

CondensedSpaceCard.defaultProps = {
  images: [],
};

export default CondensedSpaceCard;
