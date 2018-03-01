import PropTypes from 'prop-types';
import React from 'react';

import css from './MarkerContainer.css';

const MarkerContainer = ({ MarkerComponent, props }) => (
  <div className={css.root}>
    <MarkerComponent {...props} />
  </div>
);

MarkerContainer.propTypes = {
  MarkerComponent: PropTypes.func.isRequired,
  props: PropTypes.object,
};

export default MarkerContainer;
