import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import ScreenReadable from '../ScreenReadable/ScreenReadable';
import Controls from '../Video/Controls/Controls';
import PlayBtn from '../Video/PlayBtn/PlayBtn';
import css from './VideoWithRichPoster.css';
import Video from '../Video/Video';
import Icon from '../Icon/Icon';

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
    const { videoSrc, posterSrc } = this.props;
    const { isPlaying } = this.state;

    const btnClasses = cx(
      css.btn,
      isPlaying ? css.btnPlaying : null,
    );

    return (
      <div className={ css.root }>
        { isPlaying ? (
          <Video
            className={ css.video }
            key="video"
            autoPlay
            controls
          >
            { videoSrc }
          </Video>
        ) : (
          <div>
            <Video
              className={ css.video }
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
