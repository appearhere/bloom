import React from 'react';

import jetBlack from './images/iphone-jet-black.png';
import DeviceFrame from './DeviceFrame';
import css from './IPhone.css';

const IPhoneDeviceFrame = props => (
  <DeviceFrame
    { ...props }
    css={ css }
    deviceImage={ jetBlack }
  />
);

export default IPhoneDeviceFrame;