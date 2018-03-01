import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import PictureCard from '../PictureCard/PictureCard';

import css from './PlaceListingCard.css';

const PlaceListingCard = (props) => {
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
      {...rest}
      href={href}
      onClick={onClick}
      className={cx(css.root, className)}
      src={imageSrc}
      overlayClassName={css.overlay}
    >
      <div className={css.body}>
        <div className={css.name}>
          { priceFromLabel && <span className={css.priceFromLabel}>{ priceFromLabel }</span> }
          <span className={css.price}>{ price }</span>
          { '\u00a0' }
          <span className={css.priceUnit}>{ priceUnit }</span>
        </div>
        <div className={css.name}>{ name }</div>
        <div className={css.additionalInformationBlock}>
          <span
            className={css.additionalInformationItem}
            style={{
              maxWidth: hasCompleteInfo ? 'calc(50% - 1rem)' : '100%',
            }}
          >
            { location }
          </span>
          { hasCompleteInfo ? <span className={css.spacer}>•</span> : null }
          <span
            className={css.additionalInformationItem}
            style={{
              maxWidth: hasCompleteInfo ? 'calc(50% - 1rem)' : '100%',
            }}
          >
            { spaceDetail }
          </span>
        </div>
      </div>
    </PictureCard>
  );
};

PlaceListingCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string,
  priceFromLabel: PropTypes.string,
  className: PropTypes.string,
  price: PropTypes.node,
  priceUnit: PropTypes.node,
  name: PropTypes.node,
  location: PropTypes.node,
  spaceDetail: PropTypes.node,
  onClick: PropTypes.func,
};

PlaceListingCard.defaultProps = {
  priceFromLabel: 'from',
};

export default PlaceListingCard;
