import React from 'react';
import { render } from 'react-dom';

import InputRangeWithHistogram, {
  getVerticalScale,
  getPointWidth,
} from './InputRangeWithHistogram';

describe('getVerticalScale', () => {
  it('returns the highest value in the array', () => {
    const data = [1, 2, 5, 10, 6, 3, 2];
    expect(getVerticalScale(data)).toEqual(10);
  });
});

describe('getPointWidth', () => {
  it('returns the percentage width of the point on the scale', () => {
    const data = [1, 2, 5, 10, 6, 3, 2];
    expect(getPointWidth(data).toFixed(9)).toEqual('14.285714286');
  });
});

describe('InputRange with Histogram', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <InputRangeWithHistogram
        name=""
        value={{
          min: 0,
          max: 1,
        }}
        minValue={0}
        maxValue={1}
        data={[]}
      />,
      div,
    );
  });
});
