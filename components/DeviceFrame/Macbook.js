import React, { PropTypes } from 'react';

import spaceGrey from './images/macbook-space-grey.png';
import gold from './images/macbook-gold.png';
import DeviceFrame from './DeviceFrame';
import VideoDeviceFrame from './VideoDeviceFrame';
import css from './Macbook.css';

const deviceImages = {
  'space-grey': spaceGrey,
  gold,
};

const MacbookDeviceFrame = ({ video, deviceColor, ...rest }) => {
  const props = {
    ...rest,
    css,
    deviceImage: deviceImages[deviceColor],
  };

  const Component = video ? VideoDeviceFrame : DeviceFrame;
  return <Component { ...props } />;
};

MacbookDeviceFrame.propTypes = {
  deviceColor: PropTypes.oneOf(['space-grey', 'gold']),
  video: PropTypes.bool,
};

MacbookDeviceFrame.defaultProps = {
  deviceColor: 'space-grey',
  video: false,
};

export default MacbookDeviceFrame;