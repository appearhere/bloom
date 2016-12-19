import React, { PropTypes } from 'react';

import noop from '../../../utils/noop';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Icon from '../../Icon/Icon';
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
          <Icon name="play-c" className={ css.icon } />
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
  play: noop,
  pause: noop,
};

export default PlayBtn;