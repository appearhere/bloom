import React, { PropTypes } from 'react';

import LinkedCard from './LinkedCard';

import css from './SpaceCard.css';

const SpaceCard = (props) => {
  const {
    name,
    price,
    location,
    ...rest,
  } = props;

  return (
    <div className={ css.root }>
      <LinkedCard { ...rest }>
        <h1 className={ css.name }>{ name }</h1>
        <div className={ css.detail }>
          <span className={ css.underline }>
            { price } · { location }
          </span>
        </div>
      </LinkedCard>
    </div>
  );
};

SpaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default SpaceCard;