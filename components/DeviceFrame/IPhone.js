import React, { PropTypes } from 'react';

import jetBlack from './images/iphone-jet-black.png';
import DeviceFrame from './DeviceFrame';
import VideoDeviceFrame from './VideoDeviceFrame';
import css from './IPhone.css';

const IPhoneDeviceFrame = ({ video, ...rest }) => {
  const props = {
    ...rest,
    css,
    deviceImage: jetBlack,
  };

  const Component = video ? VideoDeviceFrame : DeviceFrame;
  return <Component { ...props } />;
};

IPhoneDeviceFrame.propTypes = {
  video: PropTypes.bool,
};

export default IPhoneDeviceFrame;
