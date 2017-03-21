import React from 'react';

import SpaceListingCard from '../Cards/SpaceListingCard/SpaceListingCard';

import css from './SpaceMarker.css';

const SpaceMarker = ({ ...props }) => (
  <div className={ css.root }>
    <SpaceListingCard
      { ...props }
    />
  </div>
);

export default SpaceMarker;