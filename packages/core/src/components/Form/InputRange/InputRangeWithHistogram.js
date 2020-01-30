// @flow
import React, { Component } from 'react';

import css from './InputRange.css';
import InputRange from './InputRange';

/* eslint-disable arrow-body-style */
export const getVerticalScale = (data: Array<number>) =>
  data.reduce((currentHighestValue, datum) => {
    return datum >= currentHighestValue ? datum : currentHighestValue;
  }, 0);
/* eslint-enable arrow-body-style */

export const getPointWidth = (data: Array<number>) => 100 / data.length;

const defaultValueSelector = (value: number) => value;

type Props = {
  name: string,
  data: Array<number>,
  valueSelector: Function,
}
export default class InputRangeWithHistogram extends Component<Props> {

  static defaultProps = {
    valueSelector: defaultValueSelector,
  };

  render() {
    const { valueSelector, data, name, ...rest } = this.props;

    const pointData = data.map(datum => valueSelector(datum));
    const maxPointHeight = getVerticalScale(pointData);
    const pointWidth = getPointWidth(pointData);

    return (
      <div className={css.container}>
        <div className={css.histogram}>
          {pointData.map((datum, i) => (
            <div
              key={`${name}-${i}`}
              className={css.barContainer}
              style={{
                width: `${pointWidth}%`,
                height: `${datum / maxPointHeight * 100}%`,
              }}
            >
              <div className={css.bar} />
            </div>
          ))}
        </div>
        <InputRange name={name} {...(rest: any)} />
      </div>
    );
  }
}
