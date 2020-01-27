//@flow
/*
  global
  window: true,
 */

import * as React from 'react';
import { subscribe } from 'subscribe-ui-event';

type Props = {
  children: React.Node,
  threshold: number
}

type State = {
  opacity: number  
}

type ReactObjRef<ElementType: React.ElementType> = 
  {current: null | React.ElementRef<ElementType>}

export default class EdgeFade extends React.Component<Props, State> {
  scrollEventSubscription: Function;
  wrapper: any

  static defaultProps = {
    threshold: 150,
  };

  state = {
    opacity: 1,
  };

  componentDidMount() {
    this.isNearEdge();
    this.scrollEventSubscription = subscribe('scroll', this.isNearEdge, {
      useRAF: true,
    });
  }

  componentWillUnmount() {
    this.scrollEventSubscription.unsubscribe();
  }

  getCurrentPosition = () => {
    const { top, bottom } = this.wrapper.getBoundingClientRect();

    return {
      fromTop: top,
      fromBottom: window.innerHeight - bottom,
    };
  };

  isNearEdge = () => {
    const { threshold } = this.props;
    const { fromTop, fromBottom } = this.getCurrentPosition();

    if (fromTop - threshold < 0 && fromTop) {
      this.setState({
        opacity: fromTop.toFixed(0) / threshold,
      });
    } else if (fromBottom - threshold < 0 && fromBottom) {
      this.setState({
        opacity: Number(fromBottom.toFixed(0)) / threshold,
      });
    } else {
      this.setState({
        opacity: 1,
      });
    }
  };

  render() {
    const { children } = this.props;
    const { opacity } = this.state;

    return (
      <div
        ref={c => {
          this.wrapper = c;
        }}
        style={{
          opacity,
        }}
      >
        {children}
      </div>
    );
  }
}
