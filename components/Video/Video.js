import React, { PropTypes } from 'react';
import ReactVideo from 'react-html5video';
import cx from 'classnames';

import Controls from './Controls/Controls';
import Scrubber from './Scrubber/Scrubber';
import PlayBtn from './PlayBtn/PlayBtn';
import css from './Video.css';

const Video = (props) => {
  const { children: source, className, controls, aspectRatio, ...rest } = props;
  const classes = cx(css.root, className);

  // react-html5video needs to support style props for this to work
  return (
    <ReactVideo
      className={ classes }
      style={ {
        paddingBottom: `${height}%`,
      } }
      controls={ controls }
      { ...rest }
    >
      { source }
      <Controls>
        <PlayBtn />
        <Scrubber />
      </Controls>
    </ReactVideo>
  );
};

Video.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  controls: PropTypes.bool,
  aspectRatio: (props, propName, componentName) => {
    if (props[propName].indexOf(':') < 0) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Invalid format. Aspect ratio should be ' +
        'supplied like 4:3.'
      );
    }
  }
};

Video.defaultProps = {
  controls: false,
  aspectRatio: '16:9',
};

export default Video;