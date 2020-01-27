// @flow

import * as React from 'react';
import videoConnect, { apiHelpers as videoApiHelpers } from 'react-html5video';
import cx from 'classnames';


import Controls from './Controls/Controls';
import Scrubber from './Scrubber/Scrubber';
import PlayBtn from './PlayBtn/PlayBtn';
import css from './Video.css';

type VideoType = {
  paused: boolean,
  duration: number,
  currentTime: number,
}

type Props = {
  children: Array<React.Element<any>> | React.Element<any>,
  video: VideoType,
  className: ?string,
  controls: ?boolean,
  onPlayPauseClick: Function,
  onSeekChange: ?Function,
}

type State = {
  hasPlayed: boolean
}

const {
  togglePause,
  setCurrentTime,
  getPercentagePlayed,
  getPercentageBuffered,
} = videoApiHelpers;

class Video extends React.Component<Props, State> {
  static defaultProps = {
    controls: false,
  };

  state = {
    hasPlayed: false,
  };

  handlePlayPause = () => {
    const { onPlayPauseClick } = this.props;
    const { hasPlayed } = this.state;

    if (!hasPlayed) {
      this.setState({
        hasPlayed: true,
      });
    }
    onPlayPauseClick();
  };

  render() {
    const {
      video,
      children: source,
      className,
      controls,
      onSeekChange,
      onPlayPauseClick: _onPlayPauseClick,
      ...rest
    } = this.props;

    const {
      paused,
      duration,
      currentTime,
    } = video;

    const { hasPlayed } = this.state;

    const classes = cx(
      css.root,
      hasPlayed && paused ? css.overlay : null,
      className
    );

    return (
      <div className={classes}>
        <video {...rest}>
          { source }
        </video>

        { controls && (
          <div>
            <Controls>
              <PlayBtn
                playPause={this.handlePlayPause}
                paused={paused}
              />
              <Scrubber
                duration={duration}
                currentTime={currentTime}
                seek={onSeekChange}
              />
            </Controls>
          </div>
        ) }
      </div>
    );
  }
}

const mapStateToProps = ({ networkState, readyState, error, ...restState }) => {
  let loading;
  if (typeof navigator !== 'undefined') {
    const minRequiredState = (/iPad|iPhone|iPod/.test(navigator.userAgent) ? 1 : 4);
    loading = readyState < minRequiredState;
  } else {
    loading = false;
  }

  return {
    video: {
      readyState,
      networkState,
      error: error || networkState === 3,
      loading,
      percentagePlayed: getPercentagePlayed(restState),
      percentageBuffered: getPercentageBuffered(restState),
      ...restState,
    }
  }
}

export default videoConnect(Video, mapStateToProps, (videoEl, state) => ({
    onPlayPauseClick: () => togglePause(videoEl, state),
    onSeekChange: e => setCurrentTime(videoEl, state, e.target.value * (state.duration / 100)),
  })
);
