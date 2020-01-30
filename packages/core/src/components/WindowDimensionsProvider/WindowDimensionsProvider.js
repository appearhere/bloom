// @flow

import * as React from 'react'
import { subscribe } from 'subscribe-ui-event';
import ExecutionEnvironment from 'exenv';

type Props = {
  children: React.Element<any>,
}

type Dimensions = {
  height: number,
  width: number,
}

type State = {
  dimensions?: Dimensions
}

export const WindowDimensionsCtx: Object = React.createContext(null);

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const WindowDimensionsProvider = ({ children }: Props) => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  const [dimensions, setDimensions] = React.useState(windowDims())
  React.useEffect(() => {
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
  return React.useContext(WindowDimensionsCtx);
};
