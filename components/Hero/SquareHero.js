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
    headingSide,
    ...rest,
  } = props;

  return (
    <div
      { ...rest }
      className={ cx(defaultCss.root, defaultCss[headingSide], className) }
    >
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
  headingSide: PropTypes.oneOf(['left', 'right']),
};

SquareHero.defaultProps = {
  css: {
    square: '',
    image: '',
  },
  level: 1,
  headingSide: 'left',
};

export default SquareHero;