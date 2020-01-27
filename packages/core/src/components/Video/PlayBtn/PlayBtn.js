// @flow

import React from 'react';
import noop from '../../../utils/noop';
import ScreenReadable from '../../ScreenReadable/ScreenReadable';
import BtnContainer from '../../BtnContainer/BtnContainer';
import Icon from '../../Icon/Icon';
import css from './PlayBtn.css';

type Props = {
  playPause: Function,
  paused: boolean,
}

const PlayBtn = ({ playPause, paused }: Props) => (
  <BtnContainer className={css.root} onClick={playPause}>
    {paused ? (
      <span>
        <Icon name="play-c" className={css.icon} />
        <ScreenReadable>Play</ScreenReadable>
      </span>
    ) : (
      <ScreenReadable>Pause</ScreenReadable>
    )}
  </BtnContainer>
);

PlayBtn.defaultProps = {
  playPause: noop,
};

export default PlayBtn;
