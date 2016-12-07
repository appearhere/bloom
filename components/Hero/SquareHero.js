import React, { PropTypes, createElement } from 'react';
import cx from 'classnames';

import FittedImage from '../FittedImage/FittedImage';
import VideoWithRichPoster from '../VideoWithRichPoster/VideoWithRichPoster';

import defaultCss from './SquareHero.css';

const SquareHero = (props) => {
  const {
    children,
    image,
    videoProps,
    alt,
    css,
    className,
    level,
    headingSide,
    ...rest,
  } = props;

  const rootClass = cx(
    defaultCss.root,
    videoProps ? defaultCss.videoRoot : defaultCss.imageRoot,
    defaultCss[headingSide],
    className
  );

  return (
    <div
      { ...rest }
      className={ rootClass }
    >
      <div className={ cx(defaultCss.mediaContainer, css.image) }>
        { videoProps
          ? <VideoWithRichPoster { ...videoProps } className={ cx(defaultCss.video, css.video) } />
          : <FittedImage className={ defaultCss.image } src={ image } alt={ alt } />
        }
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
    video: PropTypes.string,
  }),
  level: PropTypes.number,
  headingSide: PropTypes.oneOf(['left', 'right']),
  videoProps: PropTypes.shape({
    videoClassName: PropTypes.string,
    posterClassName: PropTypes.string,
    posterSrc: PropTypes.node.isRequired,
    videoSrc: PropTypes.node.isRequired,
  }),
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