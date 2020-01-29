// @flow
import React from 'react';
import cx from 'classnames';
import shortid from 'shortid';
import FittedImage from '../../FittedImage/FittedImage';
import Icon from '../../Icon/Icon';
import RemoveOrphans from '../../RemoveOrphans/RemoveOrphans';

import css from './SuccessStoryCardMobile.css';

type Props = {
  title: string,
  imageSrc: string,
  copy: string,
  brands: Array<any>,
  href: string,
  variant?: string,
  brandsTitle: string,
}

const SuccessStoryCardMobile = ({title, imageSrc, copy, brands, href, brandsTitle, variant}: Props) => (
  <div className={cx(css.successStoryCard, {
    [css.goldBackground]: variant === 'gold',
    [css.blackBackground]: variant === 'black',
  })}>
    <h2 className={css.title}>
      <RemoveOrphans text={title} />
    </h2>
    <FittedImage src={imageSrc} alt={title} className={css.image}/>
    <a href={href} className={css.info}>
      <p className={css.copy}>
        <RemoveOrphans text={copy} />
      </p>
      <Icon name="arrow-right" className={css.arrow} />
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

SuccessStoryCardMobile.defaultProps = {
  variant: 'black',
  brands: [],
};

export default SuccessStoryCardMobile;
