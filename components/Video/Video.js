import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactVideo from 'react-html5video';
import cx from 'classnames';

import Controls from './Controls/Controls';
import Scrubber from './Scrubber/Scrubber';
import PlayBtn from './PlayBtn/PlayBtn';
import css from './Video.css';

class Video extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    className: PropTypes.string,
    controls: PropTypes.bool,
  };

  static defaultProps = {
    controls: false,
  };

  state = {
    isPlaying: false,
    hasPlayed: false,
  }

  handlePlay = () => {
    const { hasPlayed } = this.state;

    const newState = {
      isPlaying: true,
    };

    if (!hasPlayed) newState.hasPlayed = true;

    this.setState(newState);
  }

  handlePause = () => {
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    const {
      children: source,
      className,
      controls,
      ...rest,
    } = this.props;

    const { hasPlayed, isPlaying } = this.state;

    const classes = cx(
      css.root,
      hasPlayed && !isPlaying ? css.overlay : null,
      className
    );

    return (
      <ReactVideo
        className={ classes }
        controls={ controls }
        onPlay={ this.handlePlay }
        onPause={ this.handlePause }
        { ...rest }
      >
        { source }
        <Controls>
          <PlayBtn />
          <Scrubber />
        </Controls>
      </ReactVideo>
    );
  }
}

export default Video;
