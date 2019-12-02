import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExecutionEnvironment from 'exenv';

const ScreenSize = ({ tabletSize = 48, desktopSize = 64, render }) => {
  const getSize = () => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }
    return {
      isMobile: window.matchMedia(`(max-width: ${tabletSize - 0.0625}rem)`).matches,
      isTablet: window.matchMedia(`(min-width: ${tabletSize}rem) and (max-width: ${desktopSize - 0.0625}rem)`).matches,
      isDesktop: window.matchMedia(`(min-width: ${desktopSize}rem)`).matches,
    };
  }

  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setSize(getSize());
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return render(size)
};

ScreenSize.propTypes = {
  tabletSize: PropTypes.number,
  desktopSize: PropTypes.number,
  render: PropTypes.func,
}

export default ScreenSize;
