/* global jasmine:true */

import { scryRenderedDOMComponentsWithTag, Simulate } from 'react-addons-test-utils';
import React from 'react';
import { render } from 'react-dom';

import Select from './Select';
import Option from './Option';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(
    <Select>
      <Option>option</Option>
    </Select>,
    div
  );
});

it('handles external focusing and blurring', () => {
  const div = document.createElement('div');
  let component;

  render(
    <Select ref={ (c) => { component = c; } }>
      <Option>option</Option>
    </Select>,
    div
  );

  component.focus();

  expect(component.select === document.activeElement).toBe(true);
  expect(component.state.hasFocus).toBe(true);

  component.blur();
  expect(component.select === document.activeElement).toBe(false);
  expect(component.state.hasFocus).toBe(false);
});

describe('multiple select', () => {
  it('on change returns an array as the value', () => {
    const div = document.createElement('div');
    const spy = jasmine.createSpy('onChange');
    let component;

    render(
      <Select onChange={ spy } value={ ['1'] } multiple ref={ (c) => { component = c; } }>
        <Option value="1" key="1">1</Option>
        <Option value="2" key="2">2</Option>
      </Select>,
      div
    );

    const option = scryRenderedDOMComponentsWithTag(component, 'option')[1];
    option.selected = true;
    Simulate.change(option);

    expect(spy.calls.count()).toEqual(1);
    expect(spy.calls.mostRecent().args[2]).toEqual(['1', '2']);
  });
});