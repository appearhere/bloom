import PropTypes from 'prop-types';
import React, { Children } from 'react';
import nanoid from 'nanoid';
import SectionHeader from '../Type/SectionHeader/SectionHeader';

import css from './MobileCarousel.css';

const MobileCarousel = ({ children = [], title }) => {
  var id = nanoid();
  return (
    <div>
      <SectionHeader title={title} level={2} className={css.title} />
      <div className={css.slides}>
        {children.map((slide) => (
          <div key={id} className={css.slide}>
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
