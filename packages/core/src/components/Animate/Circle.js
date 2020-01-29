// @flow

import React from 'react';
var reactMotion = require('react-motion');
var classNames = require('classnames');

import css from './Circle.css';

const cx = classNames.bind(css);

type Props = {
  percent: number,
}

const Circle = ({ percent }: Props) => (
  <svg className={css.root} viewBox="0 0 34 34">
    <circle className={cx(css.circle, css.circleTrack)} cx="17" cy="17" r="15.9154943092" />
    <reactMotion.Motion
      defaultStyle={{
        x: 0,
      }}
      style={{
        x: reactMotion.spring(percent, { stiffness: 35, damping: 10 }),
      }}
    >
      {({ x }) => (
        <circle
          className={cx(css.circle, css.circleFilled)}
          cx="17"
          cy="17"
          r="15.9154943092"
          strokeDasharray={`${x}, 100`}
        />
        )
      }
    </reactMotion.Motion>
  </svg>
);

Circle.defaultProps = {
  percent: 0,
};

export default Circle;
