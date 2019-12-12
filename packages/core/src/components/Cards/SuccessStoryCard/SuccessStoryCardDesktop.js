import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import shortid from 'short-id';
import FittedImage from "../../FittedImage/FittedImage";
import IconLink from '../../IconLink/IconLink';

import css from './SuccessStoryCardDesktop.css';

const SuccessStoryCardDesktop = ({title, imageSrc, copy, brands = [], href, variant}) => (
  <div className={cx(css.successStoryCard, {
      [css.goldBackground]: variant === 'gold',
      [css.blackBackground]: variant === 'black',
    })}>
    <div className={css.left}>
      <div className={css.leftInner}>
        <h2 className={css.title}>{title}</h2>
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
    </div>
    <div className={css.right}>
      <FittedImage src={imageSrc} alt={title} className={css.image}/>
      <div className={css.rightInner}>
        <div className={css.info}>
          <p className={css.copy}>{copy}</p>
          <IconLink inverted href={href} iconName="arrow" text="Read More" />
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
  variant: PropTypes.string.isRequired,
}

SuccessStoryCardDesktop.defaultProps = {
  variant: 'black'
}

export default SuccessStoryCardDesktop;