/* global jasmine:true */

let mapSpy = jasmine.createSpy('map');
let markerSpy = jasmine.createSpy('map');
const setMapSpy = (newSpy) => { mapSpy = newSpy; };
const setMarkerSpy = (newSpy) => { markerSpy = newSpy; };

class Map {
  constructor(options) {
    mapSpy('constructor', options);
  }

  fitBounds = mapSpy.bind(null, 'fitBounds');
  off = mapSpy.bind(null, 'off');
  on = mapSpy.bind(null, 'on');
  remove = mapSpy.bind(null, 'remove');
  setCenter = mapSpy.bind(null, 'setCenter');
  setZoom = mapSpy.bind(null, 'setZoom');
}

class Marker {
  constructor(options) {
    this.el = document.createElement('div');
    markerSpy('constructor', options);
  }

  setLngLat = (lngLat) => {
    markerSpy('setLngLat', lngLat);
    this.lngLat = lngLat;
    return this;
  };

  addTo = (map) => {
    markerSpy('addTo', map);
    return this;
  }

  getElement = () => {
    markerSpy('getElement');
    return this.el;
  }

  getLngLat = () => {
    markerSpy('getLngLat');
    return { toArray: () => this.lngLat };
  }

  remove = markerSpy.bind(null, 'remove');
}

export default { Map, Marker, setMapSpy, setMarkerSpy };