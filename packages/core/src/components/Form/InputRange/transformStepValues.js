// @flow
import React, { Component } from 'react';
import noop from '../../../utils/noop';

type MinMax = {
  min: number,
  max: number,
}
type Props = {
  onChange: Function,
  onChangeComplete: Function,
  value: number | MinMax,
  maxValue: number,
  minValue: number,
}

export const getDomainValue = (rawValue: number, steps: Array<number>) => {
  if (typeof rawValue === 'object') {
    return {
      min: steps[rawValue.min],
      max: steps[rawValue.max],
    };
  }

  return steps[rawValue];
};

export const getRawValue = (domainValue: Object, steps: Array<number>) => {
  if (typeof domainValue === 'object') {
    return {
      min: steps.indexOf(domainValue.min),
      max: steps.indexOf(domainValue.max),
    };
  }

  return steps.indexOf(domainValue);
};

const transformStepValues = (WrappedComponent: any) => (steps: Array<number>) =>
  class extends Component<Props> {
    component: ?HTMLDivElement;
    
    static defaultProps = {
      onChange: noop,
      onChangeComplete: noop,
    };

    handleChange = (e: SyntheticEvent<>, name: string, rawValue: number) => {
      const { onChange } = this.props;
      onChange(e, name, getDomainValue(rawValue, steps));
    };

    handleChangeComplete = (e: SyntheticEvent<>, name: string, rawValue: number) => {
      const { onChangeComplete } = this.props;
      onChangeComplete(e, name, getDomainValue(rawValue, steps));
    };

    render() {
      const { maxValue, minValue, value } = this.props;

      const rawMaxValue = getRawValue(maxValue, steps);
      const rawMinValue = getRawValue(minValue, steps);
      const rawValues = getRawValue(value, steps);

      return (
        <WrappedComponent
          {...this.props}
          maxValue={rawMaxValue}
          minValue={rawMinValue}
          value={rawValues}
          ref={c => {
            this.component = c;
          }}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
      );
    }
  };

export default transformStepValues;
