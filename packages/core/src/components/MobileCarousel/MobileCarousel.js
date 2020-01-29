// @flow

import * as React from 'react';
import shortid from 'shortid';

import css from './MobileCarousel.css';

type Props = {
  children: Array<React.Node>,
  title: string
}

const MobileCarousel = ({ children, title }: Props) => {
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
  children: []
};

export default MobileCarousel;
