//@flow

import React from 'react';

import css from './MarkerContainer.css';

type Props = {
  MarkerComponent: Function,
  props: Object,
}

const MarkerContainer = ({ MarkerComponent, props }: Props) => (
  <div className={css.root}>
    <MarkerComponent {...props} />
  </div>
);

export default MarkerContainer;
