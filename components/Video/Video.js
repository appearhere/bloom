import React, { PropTypes } from 'react';
import ReactVideo from 'react-html5video';
import cx from 'classnames';

import Controls from './Controls/Controls';
import Scrubber from './Scrubber/Scrubber';
import PlayBtn from './PlayBtn/PlayBtn';
import css from './Video.css';

const Video = (props) => {
  const { children: source, className, controls, ...rest } = props;
  const classes = cx(css.root, className);

  return (
    <ReactVideo
      className={ classes }
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
};

Video.defaultProps = {
  controls: false,
};

export default Video;