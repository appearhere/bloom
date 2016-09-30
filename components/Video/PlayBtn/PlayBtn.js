import React, { PropTypes } from 'react';

import ScreenReadable from 'components/ScreenReadable/ScreenReadable';
import BtnContainer from 'components/BtnContainer/BtnContainer';
import Icon from 'components/Icon/Icon';
import css from './PlayBtn.css';

const PlayBtn = ({ play, pause, paused }) => {
  const togglePlay = paused ? play : pause;

  return (
    <BtnContainer
      className={ css.root }
      onClick={ togglePlay }
    >
      { paused ? (
        <span>
          <Icon name="play" />
          <ScreenReadable>Play</ScreenReadable>
        </span>
      ) : (
        <ScreenReadable>Pause</ScreenReadable>
      ) }
    </BtnContainer>
  );
};

PlayBtn.propTypes = {
  play: PropTypes.func,
  pause: PropTypes.func,
  paused: PropTypes.bool.isRequired,
};

PlayBtn.propTypes = {
  play: () => {},
  pause: () => {},
}

export default PlayBtn;