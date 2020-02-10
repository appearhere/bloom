// @flow

import * as React from 'react';
import shortid from 'shortid';
import cx from 'classnames';

import css from './MobileCarousel.css';

type Props = {
  children: Array<React.Node>,
  title: string,
  titleSize: 'small' | 'large'
}

const MobileCarousel = ({ children, title, titleSize }: Props) => {
  return (
    <div>
      { title && <h2 className={cx(css.title, {
        [css.small]: titleSize === 'small',
        [css.large]: titleSize === 'large'
      })}>{title}</h2> }
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
  titleSize: 'large',
  children: []
};

export default MobileCarousel;
