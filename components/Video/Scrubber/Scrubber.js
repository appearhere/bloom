import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

import css from './Scrubber.css';

export default class Scrubber extends Component {
  static propTypes = {
    duration: PropTypes.number,
    currentTime: PropTypes.number,
    seek: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
    };
  }

  getInnerWidth = () => {
    const { currentTime, duration } = this.props;
    return (currentTime / duration) * 100;
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = () => {
    this.setState({ focused: false });
  };

  handleSeek = (e) => {
    const { seek, duration } = this.props;
    seek((e.target.value * duration) / 100, true);
  };

  render() {
    const { focused } = this.state;

    const scrubberInnerClasses = cx(
      css.scrubberInner,
      focused ? css.scrubberInnerFocused : null,
    );

    return (
      <div className={ css.scrubber }>
        <input
          className={ css.scrubberInput }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          onChange={ this.handleSeek }
          type="range"
          min="0"
          max="100"
        />

        <div
          className={ scrubberInnerClasses }
          style={ {
            width: `${this.getInnerWidth()}%`,
          } }
        />
      </div>
    );
  }
}