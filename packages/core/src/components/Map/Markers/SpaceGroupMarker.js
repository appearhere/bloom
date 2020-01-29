// @flow

import React from 'react';

import CondensedSpaceCard from '../../Cards/CondensedSpaceCard/CondensedSpaceCard';
import Marker from './Marker';

import css from './SpaceGroupMarker.css';

type Props = {
  group: Array<any>
}

const SpaceGroupMarker = ({ group, ...rest }: Props) => (
  <Marker {...rest}>
    {group.map(space => <CondensedSpaceCard className={css.card} key={space.id} {...space} />)}
  </Marker>
);

export default SpaceGroupMarker;
