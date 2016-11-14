import React, { PropTypes } from 'react';
import cx from 'classnames';
import LinkedCard from './LinkedCard';

import css from './SpaceCard.css';

const SpaceCard = (props) => {
  const {
    name,
    price,
    location,
    className,
    innerClassName,
    ...rest,
  } = props;

  return (
    <div className={ cx(css.root, className) }>
      <LinkedCard
        className={ innerClassName }
        { ...rest }
      >
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
  innerClassName: PropTypes.string,
};

export default SpaceCard;