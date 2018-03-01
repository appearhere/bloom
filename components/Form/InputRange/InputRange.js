import PropTypes from 'prop-types';
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

export default class InputRange extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    ]).isRequired,
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func,
    classNames: PropTypes.shape({
      component: PropTypes.string,
      labelContainer: PropTypes.string,
      labelMax: PropTypes.string,
      labelMin: PropTypes.string,
      labelValue: PropTypes.string,
      slider: PropTypes.string,
      sliderContainer: PropTypes.string,
      trackActive: PropTypes.string,
      trackContainer: PropTypes.string,
      disabled: PropTypes.string,
    }),
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
  };

  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    classNames: defaultClassNames,
  };

  handleChange = (val) => {
    const { name, onChange } = this.props;
    onChange(null, name, val);
  };

  handleChangeComplete = (val) => {
    const { name, onChangeComplete } = this.props;
    onChangeComplete(null, name, val);
  };

  render() {
    const {
      classNames,
      id,
      value,
      minValue,
      maxValue,
      ...rest
    } = this.props;

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
