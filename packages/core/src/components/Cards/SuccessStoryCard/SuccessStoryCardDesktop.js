import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import shortid from 'shortid';
import FittedImage from '../../FittedImage/FittedImage';
import IconLink from '../../IconLink/IconLink';
import RemoveOrphans from '../../RemoveOrphans/RemoveOrphans';

import css from './SuccessStoryCardDesktop.css';

const SuccessStoryCardDesktop = ({
  title,
  imageSrc,
  copy,
  brands = [],
  href,
  variant,
  brandsTitle,
}) => (
  <div className={cx(css.successStoryCard, {
    [css.goldBackground]: variant === 'gold',
    [css.blackBackground]: variant === 'black',
  })}>
    <div className={css.left}>
      <div className={css.leftInner}>
        <h2 className={css.title}>
          <RemoveOrphans text={title} />
        </h2>
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
    </div>
    <div className={css.right}>
      <FittedImage src={imageSrc} alt={title} className={css.image}/>
      <div className={css.rightInner}>
        <div className={css.info}>
          <p className={css.copy}>
            <RemoveOrphans text={copy} />
          </p>
          <IconLink inverted href={href} iconName="arrow-right" text="Read More" />
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
  variant: PropTypes.string,
  brandsTitle: PropTypes.string.isRequired,
};

SuccessStoryCardDesktop.defaultProps = {
  variant: 'black',
};

export default SuccessStoryCardDesktop;
