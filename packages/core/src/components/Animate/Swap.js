//@flow

import * as React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import transitions from './Swap.css';

type Props = {
  children: React.Node,
  animationTimeout: number,
}

const Swap = ({ children, animationTimeout }: Props) => (
  <CSSTransitionGroup
    transitionName={transitions}
    transitionEnterTimeout={animationTimeout}
    transitionLeaveTimeout={animationTimeout}
  >
    {children}
  </CSSTransitionGroup>
);

Swap.defaultProps = {
  animationTimeout: 1000,
};

export default Swap;
