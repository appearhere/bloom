import React, { PropTypes } from 'react';

import DestinationListingCard from '../DestinationListingCard/DestinationListingCard';
import Badge from '../../Badge/Badge';

import css from './PlaceListingCard.css';

const PlaceListingCard = (props) => {
  const {
    name,
    location,
    spaceDetail,
    ...rest,
  } = props;

  return (
    <DestinationListingCard
      name={
        <span>
          <Badge className={ css.badge } context="primary" hollow>Place</Badge>
          { name }
        </span>
      }
      information={ [location, spaceDetail] }
      { ...rest }
    />
  );
};

PlaceListingCard.propTypes = {
  name: PropTypes.node,
  location: PropTypes.node,
  spaceDetail: PropTypes.node,
  price: PropTypes.node,
  priceUnit: PropTypes.node,
  priceFromLabel: PropTypes.node,
};

export default PlaceListingCard;