import PropTypes from 'prop-types';
import React from 'react';
import warning from 'warning';

import Indicator from './Indicator';

const IndicatorGroup = (props) => {
  const {
    children,
    activeIndicator,
    Component,
    ...parentProps,
  } = props;

  return (
    <div { ...parentProps }>
      { children && children(({ i, ...childProps }) => {
        warning(!isNaN(i), 'IndicatorGroup(): children must be passed an index prop, `i`');
        const active = activeIndicator === i;
        return <Component { ...childProps } active={ active } />;
      }) }
    </div>
  );
};

IndicatorGroup.propTypes = {
  children: PropTypes.func.isRequired,
  activeIndicator: PropTypes.number,
  Component: PropTypes.func,
};

IndicatorGroup.defaultProps = {
  Component: Indicator,
};

export default IndicatorGroup;
