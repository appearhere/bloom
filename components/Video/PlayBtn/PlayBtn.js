import PropTypes from 'prop-types';
import React from 'react';

import noop from '../../../utils/noop';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Icon from '../../Icon/Icon';
import css from './PlayBtn.css';

const PlayBtn = ({ playPause, paused }) => (
  <BtnContainer
    className={css.root}
    onClick={playPause}
  >
    { paused ? (
      <span>
        <Icon name="play-c" className={css.icon} />
        <ScreenReadable>Play</ScreenReadable>
      </span>
    ) : (
      <ScreenReadable>Pause</ScreenReadable>
    ) }
  </BtnContainer>
);

PlayBtn.propTypes = {
  playPause: PropTypes.func,
  paused: PropTypes.bool.isRequired,
};

PlayBtn.defaultProps = {
  playPause: noop,
};

export default PlayBtn;
