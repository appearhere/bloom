/* global jasmine:true */

import React from 'react';
import ReactDOM from 'react-dom';
import MarkableMap from './MarkableMap';
import Marker from './Markers/Marker';
import SpaceGroupMarker from './Markers/SpaceGroupMarker';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';

const SpaceMarker = () => <Marker>test</Marker>;

jest.mock('../../utils/mapboxgl/mapboxgl');

const mapSpy = jasmine.createSpy('map');
mapboxgl.setMapSpy(mapSpy);

const markerSpy = jasmine.createSpy('marker');
mapboxgl.setMarkerSpy(markerSpy);

const labeledCalls = (spy, label) => spy.calls.all().filter(call => call.args[0] === label);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MarkableMap MarkerComponent={SpaceMarker} GroupMarkerComponent={SpaceGroupMarker} />,
    div,
  );
});

it('it renders the active marker correctly', () => {
  let component;
  markerSpy.calls.reset();

  const div = document.createElement('div');
  ReactDOM.render(
    <MarkableMap
      ref={c => {
        component = c;
      }}
      MarkerComponent={SpaceMarker}
      GroupMarkerComponent={SpaceGroupMarker}
      markers={[{ id: 1, lngLat: [1, 0], label: 'test' }]}
    />,
    div,
  );

  const geoJSONFeature = { geometry: { coordinates: [1, 0] }, properties: { id: 1 } };

  component.setState({ activeFeature: geoJSONFeature }, () => {
    const constructorCalls = labeledCalls(markerSpy, 'constructor');
    expect(constructorCalls.length).toEqual(1);

    const setLngLatCalls = labeledCalls(markerSpy, 'setLngLat');
    expect(setLngLatCalls.length).toEqual(1);
    expect(setLngLatCalls[0].args[1]).toEqual([1, 0]);

    const addToCalls = labeledCalls(markerSpy, 'addTo');
    expect(addToCalls.length).toEqual(1);
  });
});

it('it autosizes the map correctly', () => {
  mapSpy.calls.reset();
  const div = document.createElement('div');
  ReactDOM.render(
    <MarkableMap
      MarkerComponent={SpaceMarker}
      GroupMarkerComponent={SpaceGroupMarker}
      markers={[{ id: 1, lngLat: [1, 0], label: 'test' }]}
      autoFit
    />,
    div,
  );

  let fitBoundsCalls = labeledCalls(mapSpy, 'fitBounds');
  expect(fitBoundsCalls.length).toEqual(1);
  expect(fitBoundsCalls[0].args[1]).toEqual([[1, 0], [1, 0]]);

  ReactDOM.render(
    <MarkableMap
      MarkerComponent={SpaceMarker}
      GroupMarkerComponent={SpaceGroupMarker}
      markers={[{ id: 1, lngLat: [0, 0], label: 'test' }, { id: 2, lngLat: [1, 1], label: 'test' }]}
      autoFit
    />,
    div,
  );

  fitBoundsCalls = labeledCalls(mapSpy, 'fitBounds');
  expect(fitBoundsCalls.length).toEqual(2);
  expect(fitBoundsCalls[1].args[1]).toEqual([[0, 0], [1, 1]]);

  // re rendering with no marker changes
  mapSpy.calls.reset();

  ReactDOM.render(
    <MarkableMap
      MarkerComponent={SpaceMarker}
      GroupMarkerComponent={SpaceGroupMarker}
      markers={[{ id: 1, lngLat: [0, 0], label: 'test' }, { id: 2, lngLat: [1, 1], label: 'test' }]}
      autoFit
    />,
    div,
  );

  fitBoundsCalls = labeledCalls(mapSpy, 'fitBounds');
  expect(fitBoundsCalls.length).toEqual(0);
});

it('unmounts without crashing', () => {
  mapSpy.calls.reset();

  const div = document.createElement('div');
  ReactDOM.render(
    <MarkableMap
      MarkerComponent={SpaceMarker}
      GroupMarkerComponent={SpaceGroupMarker}
      markers={[{ id: 1, lngLat: [1, 0], label: 'test' }]}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);

  expect(labeledCalls(mapSpy, 'remove').length).toEqual(1);
});
