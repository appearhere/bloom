import PropTypes from 'prop-types';
import React, { Children } from 'react';
import shortid from 'shortid';

import css from './MobileCarousel.css';

const MobileCarousel = ({ children = [], title }) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <div className={css.slides}>
        {children.map((slide) => (
          <div key={shortid.generate()} className={css.slide}>
            <div className={css.slideInner}>{slide}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

MobileCarousel.defaultProps = {
  title: '',
};

MobileCarousel.propTypes = {
  children: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default MobileCarousel;
