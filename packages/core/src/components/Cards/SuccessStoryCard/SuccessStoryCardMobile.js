import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import FittedImage from '../../FittedImage/FittedImage';
import Icon from '../../Icon/Icon';
import RemoveOrphans from '../../RemoveOrphans/RemoveOrphans';

import css from './SuccessStoryCardMobile.css';

const SuccessStoryCardMobile = ({title, imageSrc, copy, brands = [], href, brandsTitle}) => (
  <div className={css.successStoryCard}>
    <h2 className={css.title}>
      <RemoveOrphans text={title} />
    </h2>
    <FittedImage src={imageSrc} alt={title} className={css.image}/>
    <a href={href} className={css.info}>
      <p className={css.copy}>
        <RemoveOrphans text={copy} />
      </p>
      <Icon name="arrow" className={css.arrow} />
    </a>
    <div className={css.brands}>
      <p className={css.successStoriesTitle}>
        {brandsTitle}
      </p>
      <div className={css.logos}>
        {brands.map((brand) => {
          if (!brand.logoSrc) return null;
          return (
            <a key={shortid.generate()} href={brand.url} className={css.brandLogo}>
              <FittedImage src={brand.logoSrc} alt={brand.name} />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

SuccessStoryCardMobile.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  brands: PropTypes.array.isRequired,
  href: PropTypes.string.isRequired,
  brandsTitle: PropTypes.string.isRequired,
};

export default SuccessStoryCardMobile;
