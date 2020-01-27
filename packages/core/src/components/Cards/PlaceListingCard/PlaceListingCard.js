//@flow
import * as React from 'react';
import cx from 'classnames';

import PictureCard from '../PictureCard/PictureCard';

import css from './PlaceListingCard.css';

type Props = {
  imageSrc: string,
  href: string,
  priceFromLabel: string,
  className?: string,
  price: React.Node,
  priceUnit: React.Node,
  name: React.Node,
  location: React.Node,
  spaceDetail: React.Node,
  onClick: Function,
};

const PlaceListingCard = (props: Props) => {
  const {
    imageSrc,
    href,
    priceFromLabel,
    price,
    priceUnit,
    name,
    location,
    spaceDetail,
    onClick,
    className,
    ...rest
  } = props;

  const hasCompleteInfo = location && spaceDetail;

  return (
    <PictureCard
      {...(rest: any)}
      href={href}
      onClick={onClick}
      className={cx(css.root, className)}
      src={imageSrc}
      overlayClassName={css.overlay}
    >
      <div className={css.body}>
        <div className={css.name}>
          {priceFromLabel && <span className={css.priceFromLabel}>{priceFromLabel}</span>}
          <span className={css.price}>{price}</span>
          {'\u00a0'}
          <span className={css.priceUnit}>{priceUnit}</span>
        </div>
        <div className={css.name}>{name}</div>
        <div className={css.additionalInformationBlock}>
          <span
            className={css.additionalInformationItem}
            style={{
              maxWidth: hasCompleteInfo ? 'calc(50% - 1rem)' : '100%',
            }}
          >
            {location}
          </span>
          {hasCompleteInfo ? <span className={css.spacer}>•</span> : null}
          <span
            className={css.additionalInformationItem}
            style={{
              maxWidth: hasCompleteInfo ? 'calc(50% - 1rem)' : '100%',
            }}
          >
            {spaceDetail}
          </span>
        </div>
      </div>
    </PictureCard>
  );
};

PlaceListingCard.defaultProps = {
  priceFromLabel: 'from',
};

export default PlaceListingCard;
