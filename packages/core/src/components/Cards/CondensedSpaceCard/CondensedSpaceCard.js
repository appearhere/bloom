// @flow
import React from 'react';
import cx from 'classnames';

import css from './CondensedSpaceCard.css';

import LeftRight from '../../LeftRight/LeftRight';
import FittedImage from '../../FittedImage/FittedImage';
import type { Image } from '../../FittedImage/FittedImage';

type Props = {
  href: string,
  images: Array<Image>,
  name: string,
  price: string,
  className?: string,
  priceFromLabel?: string,
  priceUnit: string,
}

const CondensedSpaceCard = (props: Props) => {
  const { href, images, name, price, priceFromLabel, priceUnit, className } = props;

  /* eslint-disable react/jsx-no-target-blank */
  return (
    <a href={href} className={cx(css.root, className)} title={name} target="_blank">
      <LeftRight
        primarySide="left"
        leftChildren={
          images.length > 0 && (
            <FittedImage className={css.image} src={images[0].src} alt={images[0].alt} />
          )
        }
        rightChildren={
          <div className={css.body}>
            <div className={css.name}>
              {priceFromLabel && <span className={css.priceFromLabel}>{priceFromLabel}</span>}
              <span className={css.price}>{price}</span>
              {'\u00a0'}
              <span className={css.priceUnit}>{priceUnit}</span>
            </div>
            <div className={css.name}>{name}</div>
          </div>
        }
      />
    </a>
  );
  /* eslint-enable react/jsx-no-target-blank */
};

CondensedSpaceCard.defaultProps = {
  images: [],
};

export default CondensedSpaceCard;
