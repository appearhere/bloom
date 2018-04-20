import PropTypes from 'prop-types';
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import transitions from './Swap.css';

const Swap = ({ children, animationTimeout }) => (
  <CSSTransitionGroup
    transitionName={transitions}
    transitionEnterTimeout={animationTimeout}
    transitionLeaveTimeout={animationTimeout}
  >
    {children}
  </CSSTransitionGroup>
);

Swap.propTypes = {
  children: PropTypes.node,
  animationTimeout: PropTypes.number,
};

Swap.defaultProps = {
  animationTimeout: 1000,
};

export default Swap;
