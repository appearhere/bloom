/* global window:true */
import { canUseDOM } from 'exenv';

const mapboxgl = canUseDOM ? require('mapbox-gl/dist/mapbox-gl') : {};

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBwZWFyaGVyZSIsImEiOiJvUlJ0MWxNIn0.8_mzlmxdekKy99luyV4T7w';

const create = (tagName, className, container) => {
  if (!canUseDOM) return {};

  const el = window.document.createElement(tagName);
  if (className) el.className = className;
  if (container) container.appendChild(el);
  return el;
};

/* eslint-disable no-underscore-dangle */
class MapWithMarkerContainer extends mapboxgl.Map {
  _setupContainer() {
    super._setupContainer();

    const container = this.getContainer();
    this.markerContainer = create('div', 'mapboxgl-marker-container', container);
  }

  getMarkerContainer() {
    return this.markerContainer;
  }
}

// addTo function taken from version 0.33.0
// https://github.com/mapbox/mapbox-gl-js/blob/adef501c464d51b328bdcdea355008aea9ab8ae1/src/ui/marker.js#L33-L52
class Marker extends mapboxgl.Marker {
  /**
     * Attaches the marker to a map
     * @param {Map} map
     * @returns {Marker} `this`
     */
  addTo(map) {
    this.remove();
    this._map = map;
    map.getMarkerContainer().appendChild(this._element);
    map.on('move', this._update);
    map.on('moveend', this._update);
    this._update();

    this._map.on('click', this._onMapClick);

    return this;
  }
}
/* eslint-enable no-underscore-dangle */

mapboxgl.Map = MapWithMarkerContainer;
mapboxgl.Marker = Marker;

export default mapboxgl;