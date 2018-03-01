/* global jasmine:true */
import React from 'react';
import { render } from 'react-dom';

import InputRange from './InputRange';
import transformStepValues, {
  getDomainValue,
  getRawValue,
} from './transformStepValues';

const steps = [
  0,
  2,
  4,
  8,
  16,
  32,
  64,
];

describe('getDomainValue', () => {
  it('maps a value to a step', () => {
    const rawValue = 4;
    const domainValue = getDomainValue(rawValue, steps);
    expect(domainValue).toEqual(16);
  });

  it('maps a min and max to steps', () => {
    const rawValue = {
      min: 0,
      max: 6,
    };

    const domainValue = getDomainValue(rawValue, steps);

    expect(domainValue).toEqual({
      min: 0,
      max: 64,
    });
  });
});

describe('getRawValue', () => {
  it('maps domain value (step) to a raw value', () => {
    const domainValue = 16;
    const rawValue = getRawValue(domainValue, steps);
    expect(rawValue).toEqual(4);
  });

  it('maps min and max domain values (steps) to their raw values', () => {
    const domainValue = {
      min: 0,
      max: 16,
    };

    const rawValue = getRawValue(domainValue, steps);
    expect(rawValue).toEqual({
      min: 0,
      max: 4,
    });
  });
});

describe('transformStepValues higher order function', () => {
  it('renders without crashing', () => {
    const WrappedInputRange = transformStepValues(InputRange)(steps);

    const div = document.createElement('div');
    render(
      <WrappedInputRange
        name=""
        minValue={steps[0]}
        maxValue={steps[6]}
        value={{ min: steps[0], max: steps[6] }}
      />,
      div
    );
  });

  it('onChange returns a single mapped domain value', () => {
    const value = 4;
    let wrapperComponent;

    const WrappedInputRange = transformStepValues(InputRange)(steps);
    const spy = jasmine.createSpy();
    const div = document.createElement('div');

    render(
      <WrappedInputRange
        ref={(c) => { wrapperComponent = c; }}
        name=""
        minValue={steps[0]}
        maxValue={steps[6]}
        value={steps[value]}
        onChange={spy}
      />,
      div
    );

    wrapperComponent.component.handleChange(value);
    expect(spy.calls.count()).toEqual(1);
    expect(spy.calls.mostRecent().args[2]).toEqual(16);
  });

  it('onChange returns the mapped min and max domain values', () => {
    const min = 1;
    const max = 6;
    let wrapperComponent;

    const WrappedInputRange = transformStepValues(InputRange)(steps);

    const changeSpy = jasmine.createSpy();

    const div = document.createElement('div');
    render(
      <WrappedInputRange
        ref={(c) => { wrapperComponent = c; }}
        name=""
        minValue={steps[0]}
        maxValue={steps[6]}
        value={{ min, max }}
        onChange={changeSpy}
      />,
      div
    );

    wrapperComponent.component.handleChange({ min, max });
    expect(changeSpy.calls.count()).toEqual(1);
    expect(changeSpy.calls.mostRecent().args[2]).toEqual({
      min: 2,
      max: 64,
    });
  });

  it('onChangeComplete returns a single mapped domain value', () => {
    const value = 4;
    let wrapperComponent;

    const WrappedInputRange = transformStepValues(InputRange)(steps);
    const changeCompleteSpy = jasmine.createSpy();
    const div = document.createElement('div');

    render(
      <WrappedInputRange
        ref={(c) => { wrapperComponent = c; }}
        name=""
        minValue={steps[0]}
        maxValue={steps[6]}
        value={value}
        onChangeComplete={changeCompleteSpy}
      />,
      div
    );

    wrapperComponent.component.handleChangeComplete(value);
    expect(changeCompleteSpy.calls.count()).toEqual(1);
    expect(changeCompleteSpy.calls.mostRecent().args[2]).toEqual(16);
  });

  it('onChangeComplete returns the mapped min and max domain values', () => {
    const min = 1;
    const max = 6;
    let wrapperComponent;

    const WrappedInputRange = transformStepValues(InputRange)(steps);

    const changeCompleteSpy = jasmine.createSpy();

    const div = document.createElement('div');
    render(
      <WrappedInputRange
        ref={(c) => { wrapperComponent = c; }}
        name=""
        minValue={steps[0]}
        maxValue={steps[6]}
        value={{ min, max }}
        onChangeComplete={changeCompleteSpy}
      />,
      div
    );

    wrapperComponent.component.handleChangeComplete({ min, max });
    expect(changeCompleteSpy.calls.count()).toEqual(1);
    expect(changeCompleteSpy.calls.mostRecent().args[2]).toEqual({
      min: 2,
      max: 64,
    });
  });
});
