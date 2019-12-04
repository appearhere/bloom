import React, { createContext, useContext, useState, useEffect } from 'react'
import { subscribe } from 'subscribe-ui-event';
import ExecutionEnvironment from 'exenv';

export const WindowDimensionsCtx = createContext(null);

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const WindowDimensionsProvider = ({ children }) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  const [dimensions, setDimensions] = useState(windowDims())
  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDims());
    };
    const resizeEventSubscription = subscribe('resize', handleResize, {
      useRAF: false,
    });
    return () => {
      resizeEventSubscription.unsubscribe('resize', handleResize);
    };
  }, []);
  return <WindowDimensionsCtx.Provider value={dimensions}>{children}</WindowDimensionsCtx.Provider>;
};

export default WindowDimensionsProvider;

export const useWindowDimensions = () => {
  return useContext(WindowDimensionsCtx);
};
