import PropTypes from 'prop-types';
import React from 'react';

import DestinationListingCard from '../DestinationListingCard/DestinationListingCard';
import Link from '../../Link/Link';

import css from './SpaceListingCard.css';

const SpaceListingCard = props => {
  const {
    placeLabel,
    placeHref,
    location,
    size,
    onPlaceLabelClick,
    onCarouselChange,
    ...rest
  } = props;

  return (
    <DestinationListingCard
      carouselOverlay={
        placeLabel && (
          <Link
            onClick={onPlaceLabelClick}
            href={placeHref}
            className={css.placeLink}
            bodyClassName={css.placeLinkBody}
            iconClassName={css.placeLinkIcon}
          >
            {placeLabel}
          </Link>
        )
      }
      information={[location, size].filter((el) => { return el; })}
      onCarouselChange={onCarouselChange}
      {...rest}
    />
  );
};

SpaceListingCard.propTypes = {
  placeLabel: PropTypes.node,
  placeHref: PropTypes.string,
  location: PropTypes.node,
  size: PropTypes.node,
  price: PropTypes.node,
  priceUnit: PropTypes.node,
  onPlaceLabelClick: PropTypes.func,
  onCarouselChange: PropTypes.func,
};

export default SpaceListingCard;
