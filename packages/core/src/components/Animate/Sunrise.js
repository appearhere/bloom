//@flow

import * as React from 'react';
import OnVisible from 'react-on-visible';
import cx from 'classnames';

import css from './Sunrise.css';

type Props = {
  visible: boolean,
  children: React.Node,
  percent?: number,
  start: boolean,
  transitionDelay: number,
}

type State = {
  start: boolean,
  transitionDelay: number,
  visible: boolean,
  hasPlayed: boolean,
}

export default class Sunrise extends React.Component<Props, State> {
  static defaultProps = {
    start: true,
    transitionDelay: 0,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      start: props.start,
      visible: props.visible,
      hasPlayed: false,
      transitionDelay: props.transitionDelay
    };
  }

  componentWillReceiveProps({ start }: { start: boolean }) {
    const { visible } = this.state;
    if (start && visible) this.hasPlayed();
  }

  handleChange = (visible: boolean) => {
    const { start } = this.props;

    this.setState({
      visible,
    });

    if (visible && start) this.hasPlayed();
  };

  hasPlayed = () => {
    const { hasPlayed } = this.state;
    if (hasPlayed) return;

    this.setState({ hasPlayed: true });
  };

  render() {
    const { children, percent, start, transitionDelay } = this.props;
    const { visible, hasPlayed } = this.state;

    const classes = cx(css.root, visible && (start || hasPlayed) ? css.visible : null);

    return (
      <OnVisible percent={percent} onChange={this.handleChange}>
        <div
          className={classes}
          style={{
            transitionDelay: `${transitionDelay}ms`,
          }}
        >
          {children}
        </div>
      </OnVisible>
    );
  }
}
