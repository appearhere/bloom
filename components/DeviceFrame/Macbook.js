import React, { PropTypes } from 'react';

import spaceGrey from './images/macbook-space-grey.png';
import gold from './images/macbook-gold.png';
import DeviceFrame from './DeviceFrame';
import css from './Macbook.css';

const deviceImages = {
  'space-grey': spaceGrey,
  gold,
};

const MacbookDeviceFrame = ({ deviceColor, ...rest }) => (
  <DeviceFrame
    { ...rest }
    css={ css }
    deviceImage={ deviceImages[deviceColor] }
  />
);

MacbookDeviceFrame.propTypes = {
  deviceColor: PropTypes.oneOf(['space-grey', 'gold']),
};

MacbookDeviceFrame.defaultProps = {
  deviceColor: 'space-grey',
};

export default MacbookDeviceFrame;