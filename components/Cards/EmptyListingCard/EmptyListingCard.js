import React, { PropTypes } from 'react';
import cx from 'classnames';

import Blokk from '../../Blokk/Blokk';

import css from '../DestinationListingCard/DestinationListingCard.css';

const EmptyListingCard = ({ className, carouselClassName, bodyClassName }) => (
  <div className={ className }>
    <div className={ cx(css.carousel, carouselClassName) } />
    <div className={ cx(css.body, bodyClassName) }>
      <Blokk length={ 4 } />
      <Blokk length={ 12 } />
      <Blokk length={ 7 } />
    </div>
  </div>
);

EmptyListingCard.propTypes = {
  className: PropTypes.string,
  carouselClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};

export default EmptyListingCard;