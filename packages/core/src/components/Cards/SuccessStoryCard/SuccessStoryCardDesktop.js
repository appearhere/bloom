import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'short-id';
import FittedImage from "../../FittedImage/FittedImage";
import Icon from '../../Icon/Icon';

import css from './SuccessStoryCardDesktop.css';

const SuccessStoryCardDesktop = ({title, imageSrc, copy, brands = [], href}) => (
  <div className={css.successStoryCard}>
    <div className={css.left}>
      <div className={css.leftInner}>
        <h2 className={css.title}>{title}</h2>
        <div className={css.brands}>
          <p className={css.successStoriesTitle}>Success Stories</p>
          <div className={css.logos}>
            {brands.map((brand) => (
              <a key={shortid.generate()} href={brand.url} className={css.brandLogo}>
                <FittedImage src={brand.logoSrc} alt={brand.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className={css.right}>
      <FittedImage src={imageSrc} alt={title} className={css.image}/>
      <div className={css.rightInner}>
        <div className={css.info}>
          <p className={css.copy}>{copy}</p>
          <a href={href} className={css.readMore}>Read More <Icon name="arrow" className={css.arrow} /></a>
        </div>
      </div>
    </div>
  </div>
);

SuccessStoryCardDesktop.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  brands: PropTypes.array.isRequired,
  href: PropTypes.string.isRequired,
}

export default SuccessStoryCardDesktop;