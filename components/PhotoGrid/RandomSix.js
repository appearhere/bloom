import PropTypes from 'prop-types';
import React, { Children } from 'react';
import cx from 'classnames';

import m from '../../globals/modifiers.css';
import css from './RandomSix.css';

const RandomSix = ({ children, className }) => {
  const {
    0: one,
    1: two,
    2: three,
    3: four,
    4: five,
    5: six
  } = children;

  return (
    <div className={ cx(css.root, className) }>
      <div className={css.row}>
        <div className={ cx(css.imageContainer, css.imageContainerLeft) }>
          { one.src && (
            <img className={ css.image } src={ one.src } alt={ one.alt } />
          ) }
        </div>
        <div className={ cx(css.imageContainer, css.imageContainerCenter) }>
          { two.src && (
            <img className={ css.image } src={ two.src } alt={ two.alt } />
          ) }
        </div>
        <div className={ cx(css.imageContainer, css.imageContainerRight) }>
          { three.src && (
            <img className={ css.image } src={ three.src } alt={ three.alt } />
          ) }
        </div>
      </div>
      <div className={css.row}>
        <div className={ cx(css.imageContainer, css.imageContainerLeft, m.valignt) }>
          { four.src && (
            <img className={ css.image } src={ four.src } alt={ four.alt } />
          ) }
        </div>
        <div className={ cx(css.imageContainer, css.imageContainerCenter, m.valignt) }>
          { five.src && (
            <img className={ css.image } src={ five.src } alt={ five.alt } />
          ) }
        </div>
        <div className={ cx(css.imageContainer, css.imageContainerRight, m.valignt) }>
          { six.src && (
            <img className={ css.image } src={ six.src } alt={ six.alt } />
          ) }
        </div>
      </div>
    </div>

  );
};

RandomSix.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default RandomSix;
