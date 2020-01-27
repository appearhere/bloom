//@flow
import * as React from 'react';
import warning from 'warning';

import Indicator from './Indicator';

type Props = {
  children: Function,
  activeIndicator: number,
  Component: Function,
}

const IndicatorGroup = (props: Props) => {
  const { children, activeIndicator, Component, ...parentProps } = props;

  return (
    <div {...parentProps}>
      {children &&
        children(({ i, ...childProps }) => {
          warning(!isNaN(i), 'IndicatorGroup(): children must be passed an index prop, `i`');
          const active = activeIndicator === i;
          return <Component {...childProps} active={active} />;
        })}
    </div>
  );
};

IndicatorGroup.defaultProps = {
  Component: Indicator,
};

export default IndicatorGroup;
