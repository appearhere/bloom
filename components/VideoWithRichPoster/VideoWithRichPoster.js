import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import Controls from '../Video/Controls/Controls';
import PlayBtn from '../Video/PlayBtn/PlayBtn';
import css from './VideoWithRichPoster.css';
import Video from '../Video/Video';

export default class VideoWithPoster extends Component {
  static propTypes = {
    posterSrc: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
    videoSrc: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element,
    ]).isRequired,
    posterClassName: PropTypes.string,
    videoClassName: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  handleToggleVideo = () => {
    const { isPlaying } = this.state;

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  render() {
    const {
      videoSrc,
      posterSrc,
      videoClassName,
      posterClassName,
    } = this.props;
    const { isPlaying } = this.state;

    return (
      <div className={ css.root }>
        { isPlaying ? (
          <Video
            className={ cx(css.video, videoClassName) }
            key="video"
            autoPlay
            controls
          >
            { videoSrc }
          </Video>
        ) : (
          <div>
            <Video
              className={ cx(css.video, posterClassName) }
              autoPlay
              loop
              muted
            >
              { posterSrc }
            </Video>
            <Controls>
              <PlayBtn
                play={ this.handleToggleVideo }
                paused
              />
            </Controls>
          </div>
        ) }
      </div>
    );
  }
}
