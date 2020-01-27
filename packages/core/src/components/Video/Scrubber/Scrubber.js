// @flow

import * as React from 'react';
import cx from 'classnames';

import css from './Scrubber.css';

type Props = {
  currentTime: number,
  duration: number,
  seek: Function,
}

type State = {
  focused: boolean
}

export default class Scrubber extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      focused: false,
    };
  }

  getInnerWidth = () => {
    const { currentTime, duration } = this.props;
    return currentTime / duration * 100;
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = () => {
    this.setState({ focused: false });
  };

  handleSeek = (e: Event) => {
    const { seek } = this.props;
    seek(e);
  };

  render() {
    const { focused } = this.state;

    const scrubberInnerClasses = cx(css.scrubberInner, focused ? css.scrubberInnerFocused : null);

    return (
      <div className={css.scrubber}>
        <input
          className={css.scrubberInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleSeek}
          type="range"
          min="0"
          max="100"
        />

        <div
          className={scrubberInnerClasses}
          style={{
            width: `${this.getInnerWidth()}%`,
          }}
        />
      </div>
    );
  }
}
