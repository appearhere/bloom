/* global jasmine:true */

import React from 'react';
import ReactDOM from 'react-dom';
import BaseMap from './BaseMap';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';

jest.mock('../../utils/mapboxgl/mapboxgl');

const spy = jasmine.createSpy('map');
spy.labeledCalls = label => spy.calls.all().filter(call => call.args[0] === label);
mapboxgl.setMapSpy(spy);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BaseMap />, div);
});

it('correctly passes props the mapboxgl contructor', () => {
  spy.calls.reset();
  const props = { zoom: 1, center: [0, 0], allowWrap: true, mapboxStyle: 'test' };
  const constructorArgs = { zoom: 1, center: [0, 0], renderWorldCopies: true, style: 'test' };

  const div = document.createElement('div');
  ReactDOM.render(<BaseMap { ...props } />, div);

  expect(spy.labeledCalls('constructor').length).toEqual(1);
  const call = spy.labeledCalls('constructor')[0];
  expect(call.args[1]).toEqual(jasmine.objectContaining(constructorArgs));
});

it('correctly assigns event listeners', () => {
  spy.calls.reset();
  const onClick = () => {};

  const div = document.createElement('div');
  ReactDOM.render(<BaseMap onClick={ onClick } />, div);

  const call = spy.labeledCalls('on')[0];
  expect(call.args[1]).toEqual('click');
  expect(call.args[2]).toEqual(onClick);
});

it('correctly updates the maps position on prop change', () => {
  spy.calls.reset();

  const div = document.createElement('div');
  ReactDOM.render(<BaseMap />, div);
  ReactDOM.render(<BaseMap zoom={ 20 } center={ [1, 1] } />, div);

  expect(spy.labeledCalls('setCenter').length).toEqual(1);
  expect(spy.labeledCalls('setZoom').length).toEqual(1);
  expect(spy.labeledCalls('setCenter')[0].args[1]).toEqual([1, 1]);
  expect(spy.labeledCalls('setZoom')[0].args[1]).toEqual(20);
});


it('removes the map on unmount', () => {
  spy.calls.reset();

  const div = document.createElement('div');
  ReactDOM.render(<BaseMap />, div);
  ReactDOM.unmountComponentAtNode(div);

  expect(spy.labeledCalls('remove').length).toEqual(1);
});