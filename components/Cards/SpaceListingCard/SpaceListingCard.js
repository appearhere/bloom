import React, { PropTypes } from 'react';

import DestinationListingCard from '../DestinationListingCard/DestinationListingCard';
import Link from '../../Link/Link';

import css from './SpaceListingCard.css';

const SpaceListingCard = (props) => {
  const {
    placeLabel,
    placeHref,
    location,
    size,
    ...rest,
  } = props;

  return (
    <DestinationListingCard
      carouselOverlay={ placeLabel && placeHref && (
        <Link
          href={ placeHref }
          className={ css.placeLink }
          iconClassName={ css.placeLinkIcon }
        >
          { placeLabel }
        </Link>
      ) }
      information={ [location, size] }
      { ...rest }
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
};

export default SpaceListingCard;