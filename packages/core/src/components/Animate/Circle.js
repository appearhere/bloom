import PropTypes from 'prop-types';
import React from 'react';
import reactMotion from 'react-motion';
import cx from 'classnames';

import css from './Circle.css';

const Circle = ({ percent }) => (
  <div>test</div>
);

Circle.propTypes = {
  percent: PropTypes.number,
};

Circle.defaultProps = {
  percent: 0,
};

export default Circle;
