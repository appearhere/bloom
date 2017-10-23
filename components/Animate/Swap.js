import PropTypes from 'prop-types';
import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import transitions from './Swap.css';

const Swap = ({ children, animationTimeout }) => (
  <TransitionGroup
    transitionName={ transitions }
    transitionEnterTimeout={ animationTimeout }
    transitionLeaveTimeout={ animationTimeout }
  >
    { children }
  </TransitionGroup>
);

Swap.propTypes = {
  children: PropTypes.node,
  animationTimeout: PropTypes.number,
};

Swap.defaultProps = {
  animationTimeout: 1000,
};

export default Swap;
