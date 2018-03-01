import PropTypes from 'prop-types';
import React from 'react';

import CondensedSpaceCard from '../../Cards/CondensedSpaceCard/CondensedSpaceCard';
import Marker from './Marker';

import css from './SpaceGroupMarker.css';

const SpaceGroupMarker = ({ group, ...rest }) => (
  <Marker {...rest}>
    { group.map(space => (
      <CondensedSpaceCard
        className={css.card}
        key={space.id}
        {...space}
      />
    )) }
  </Marker>
);

SpaceGroupMarker.propTypes = {
  group: PropTypes.array,
};

export default SpaceGroupMarker;
