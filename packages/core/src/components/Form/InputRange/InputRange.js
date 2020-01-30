// @flow
import React, { Component } from 'react';
import ReactInputRange from '@appearhere/react-input-range';

import noop from '../../../utils/noop';
import css from './InputRange.css';

export const defaultClassNames = {
  component: css.input,
  labelContainer: css.labelContainer,
  labelMax: css.labelMax,
  labelMin: css.labelMin,
  labelValue: css.labelValue,
  slider: css.slider,
  sliderActive: css.sliderActive,
  sliderContainer: css.sliderContainer,
  trackActive: css.trackActive,
  trackContainer: css.trackContainer,
  valueLabel: css.valueLabel,
  disabled: css.disabled,
};

type MinMax = {
  min: number,
  max: number,
}

type Classnames = {
  component: string,
  labelContainer: string,
  labelMax: string,
  labelMin: string,
  labelValue: string,
  slider: string,
  sliderContainer: string,
  trackActive: string,
  trackContainer: string,
  disabled: string,
}
type Props = {
  name: string,
  id: string,
  value: number | MinMax,
  onChange: Function,
  onChangeComplete: Function,
  classNames?: Classnames,
  minValue: number,
  maxValue: number,
}

export default class InputRange extends Component<Props> {
  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    classNames: defaultClassNames,
  };

  handleChange = (val: number): void => {
    const { name, onChange } = this.props;
    onChange(null, name, val);
  };

  handleChangeComplete = (val: number): void => {
    const { name, onChangeComplete } = this.props;
    onChangeComplete(null, name, val);
  };

  render() {
    const { classNames, id, value, minValue, maxValue, ...rest } = this.props;

    const defaultValue = typeof value === 'object' ? { minValue, maxValue } : maxValue;

    return (
      <div className={css.container}>
        <ReactInputRange
          {...rest}
          classNames={classNames}
          id={id}
          value={value}
          defaultValue={defaultValue}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
          minValue={minValue}
          maxValue={maxValue}
          showLabel={false}
        />
      </div>
    );
  }
}
