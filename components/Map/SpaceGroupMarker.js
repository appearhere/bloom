import React, { PropTypes } from 'react';

import CondensedSpaceCard from '../Cards/CondensedSpaceCard/CondensedSpaceCard';

import css from './SpaceMarker.css';

const SpaceGroupMarker = ({ group }) => (
  <div className={ css.root }>
    <div className={ css.scrollContainer }>
      { group.map(space => (
        <CondensedSpaceCard { ...space } key={ space.id } />
      )) }
    </div>
  </div>
);

SpaceGroupMarker.propTypes = {
  group: PropTypes.array,
};

export default SpaceGroupMarker;