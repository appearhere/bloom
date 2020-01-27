//@flow
import * as React from 'react';
import cx from 'classnames';

import FittedImage from '../FittedImage/FittedImage';
import VideoWithRichPoster from '../VideoWithRichPoster/VideoWithRichPoster';

import defaultCss from './SquareHero.css';
import ImageType from '../../utils/propTypeValidations/image';
import type { VideoProps } from '../VideoWithRichPoster/VideoWithRichPoster'; 

type CSS = {
  square: string,
  image: string,
  video: string,
}

type Props = {
  children: React.Node,
  image: ImageType,
  alt: string,
  className?: string,
  css: CSS,
  level: number,
  headingSide: 'left' |'right',
  videoProps: VideoProps,
}

const SquareHero = (props: Props) => {
  const { children, image, videoProps, alt, css, className, level, headingSide, ...rest } = props;

  const rootClass = cx(
    defaultCss.root,
    videoProps ? defaultCss.videoRoot : defaultCss.imageRoot,
    defaultCss[headingSide],
    className,
  );

  return (
    <div {...rest} className={rootClass}>
      <div className={cx(defaultCss.mediaContainer, css.image)}>
        {videoProps ? (
          <VideoWithRichPoster {...videoProps} className={cx(defaultCss.video, css.video)} />
        ) : (
          <FittedImage className={defaultCss.image} src={image} alt={alt} />
        )}
      </div>
      <div className={cx(defaultCss.square, css.square)}>
        {React.createElement(
          `h${level}`,
          {
            className: cx(defaultCss.title),
          },
          children,
        )}
      </div>
    </div>
  );
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
