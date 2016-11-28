import React, { PropTypes, createElement } from 'react';
import cx from 'classnames';

import defaultCss from './SquareHero.css';

const SquareHero = (props) => {
  const {
    children,
    image,
    alt,
    css,
    className,
    level,
    ...rest,
  } = props;

  return (
    <div { ...rest } className={ cx(defaultCss.root, className) }>
      <div className={ cx(defaultCss.imageContainer, css.image) }>
        <img className={ defaultCss.image } src={ image } alt={ alt } />
      </div>
      <div className={ cx(defaultCss.square, css.square) }>
        { createElement(
          `h${level}`, {
            className: cx(defaultCss.title),
          }, children
        ) }
      </div>
    </div>
  );
};

SquareHero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  css: PropTypes.shape({
    square: PropTypes.string,
    image: PropTypes.string,
  }),
  level: PropTypes.number,
};

SquareHero.defaultProps = {
  css: {
    square: '',
    image: '',
  },
  level: 1,
};

export default SquareHero;