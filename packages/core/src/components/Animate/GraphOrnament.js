// @flow
import React, { Component } from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import cx from 'classnames';

import css from './GraphOrnament.css';

const line =
  'M0,296 L27.9829272,287.949051 L64.0587374,283 L90.7790963,275.53125 ' +
  'L113.184701,273.308594 L138.97667,268.863281 L158.953903,261.195312 L176.182614,255 ' +
  'C176.182614,255 191.704702,245.696762 197.40064,240.5 C203.096578,235.303238 201.694095,' +
  '239.973187 223.199393,223.335937 C244.70469,206.698688 248.03046,199 272.092156,183 ' +
  'C296.153853,167 307.402974,162.5 317.207838,158 C327.012701,153.5 341.083003,147.55683 ' +
  '361.320948,140 C381.558893,132.44317 390,129 390,129';

const fill =
  'M2.84217094e-14,296 L27.9829272,287.949051 L64.0587374,283 L90.7790963,' +
  '275.53125 L113.184701,273.308594 L138.97667,268.863281 L158.953903,261.195312 L176.182614,' +
  '255 C176.182614,255 191.704702,245.696762 197.40064,240.5 C203.096578,235.303238 ' +
  '201.694095,239.973187 223.199393,223.335937 C244.70469,206.698688 248.03046,199 ' +
  '272.092156,183 C296.153853,167 307.402974,162.5 317.207838,158 C327.012701,153.5 ' +
  '341.083003,147.55683 361.320948,140 C381.558893,132.44317 390,129 390,129 L390,351 ' +
  'L2.84217094e-14,351 L2.84217094e-14,296 Z';

type Props = {
  animate?: boolean,
  play?: boolean,
  className?: string,
}

export default class GraphOrnament extends Component<Props> {
  id: string;

  constructor(props: Props) {
    super(props);

    this.id = uniqueId('graph-ornament');
  }

  render() {
    const { animate, play, className } = this.props;

    const classes = cx(
      {
        [css.animate]: animate && play,
        [css.willAnimate]: animate,
      },
      className,
    );

    return (
      <svg className={classes} viewBox="0 0 390 351">
        <defs>
          <rect id={`${this.id}-mask`} x="2.84217094e-14" y="0" width="390" height="351" />
          <linearGradient
            x1="100%"
            y1="14.6562464%"
            x2="6.69339671%"
            y2="95.8727342%"
            id={`${this.id}-line-gradiant`}
          >
            <stop stopColor="#BBA080" offset="0%" />
            <stop stopColor="#BBA080" stopOpacity="0.12" offset="100%" />
          </linearGradient>
          <linearGradient
            x1="96.5094151%"
            y1="12.2011619%"
            x2="-26.7618189%"
            y2="58.1035483%"
            id={`${this.id}-fill-gradiant`}
          >
            <stop stopColor="#BBA080" stopOpacity="1.00294049" offset="0%" />
            <stop stopColor="#FFDD33" stopOpacity="0" offset="100%" />
          </linearGradient>
        </defs>
        <g>
          <mask>
            <use xlinkHref={`#${this.id}-mask`} />
          </mask>
          <use xlinkHref={`#${this.id}-mask`} />
          <path
            className={css.line}
            d={line}
            stroke={`url(#${this.id}-line-gradiant)`}
            mask={`#${this.id}-mask`}
          />
          <path
            className={css.fill}
            d={fill}
            fill={`url(#${this.id}-fill-gradiant)`}
            opacity="0.12"
            mask={`#${this.id}-mask`}
          />
        </g>
      </svg>
    );
  }
}
