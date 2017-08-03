import React, { PropTypes } from 'react';

import css from './MarkerContainer.css';

const MarkerContainer = ({ MarkerComponent, props }) => (
  <div className={ css.root }>
    <MarkerComponent { ...props } />
  </div>
);

MarkerContainer.propTypes = {
  MarkerComponent: PropTypes.func.isRequired,
  props: PropTypes.object,
};

export default MarkerContainer;
