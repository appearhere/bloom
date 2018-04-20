import PropTypes from 'prop-types';
import React from 'react';

import Video from '../Video/Video';

const VideoDeviceFrame = ({ children: source, deviceImage, css, ...rest }) => (
  <div className={css.root}>
    <img className={css.frame} src={deviceImage} role="presentation" />
    <div className={css.inner}>
      <Video className={css.video} controls={false} autoPlay muted {...rest}>
        {source}
      </Video>
    </div>
  </div>
);

VideoDeviceFrame.propTypes = {
  deviceImage: PropTypes.string,
  children: PropTypes.node,
  css: PropTypes.shape({
    /* eslint-disable react/no-unused-prop-types */
    root: PropTypes.string,
    frame: PropTypes.string,
    inner: PropTypes.string,
    video: PropTypes.string,
    /* eslint-enable react/no-unused-prop-types */
  }),
};

export default VideoDeviceFrame;
