import React, { PropTypes } from 'react';
import cx from 'classnames';

import SpaceListingCard from '../Cards/SpaceListingCard/SpaceListingCard';
import noop from '../../utils/noop';

import css from './SpaceMarker.css';

const SpaceMarker = ({ price, active, onClick, ...rest }) => {
  const card = (
    <div className={ cx(css.root, css.active) }>
      <SpaceListingCard
        { ...rest }
        bodyClassName={ css.body }
        price={ price }
      />
    </div>
  );

  return (active
    ? card
    : <button className={ css.root } onClick={ onClick }>{ price }</button>
  );
};

SpaceMarker.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  price: PropTypes.string,
};

SpaceMarker.defaultProps = {
  onClick: noop,
};

export default SpaceMarker;