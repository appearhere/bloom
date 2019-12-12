import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'short-id';
import FittedImage from "../../FittedImage/FittedImage";
import Icon from '../../Icon/Icon';

import css from './SuccessStoryCardMobile.css';

const SuccessStoryCardMobile = ({title, imageSrc, copy, brands = [], href}) => (
  <div className={css.successStoryCard}>
    <h2 className={css.title}>{title}</h2>
    <FittedImage src={imageSrc} alt={title} className={css.image}/>
    <a href={href} className={css.info}>
      <p className={css.copy}>{copy}</p>
      <Icon name="arrow" className={css.arrow} />
    </a>
    <div className={css.brands}>
      <p className={css.successStoriesTitle}>Success Stories</p>
      <div className={css.logos}>
        {brands.map((brand) => {
          return brand.logoSrc && <a key={shortid.generate()} href={brand.url} className={css.brandLogo}>
            <FittedImage src={brand.logoSrc} alt={brand.name} />
          </a>
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
}

export default SuccessStoryCardMobile;