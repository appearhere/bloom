import React, { PropTypes } from 'react';
import ReactVideo from 'react-html5video';

const VideoDeviceFrame = ({ children: source, deviceImage, css, ...rest }) => (
  <div className={ css.root }>
    <img
      className={ css.frame }
      src={ deviceImage }
      role="presentation"
    />
    <div className={ css.inner }>
      <ReactVideo
        { ...rest }
        className={ css.video }
        controls={ false }
        autoPlay
        muted
      >
        { source }
      </ReactVideo>
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