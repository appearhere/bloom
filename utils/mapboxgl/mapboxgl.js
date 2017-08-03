import { canUseDOM } from 'exenv';

const createAndAppendChild = (tagName, className, container) => {
  if (!canUseDOM) return {};

  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (container) container.appendChild(el);
  return el;
};

const monkeyPatchMapbox = (mapbox) => {
  /* eslint-disable no-underscore-dangle */
  class Map extends mapbox.Map {
    _setupContainer() {
      super._setupContainer();

      const container = this.getContainer();
      this.markerContainer = createAndAppendChild('div', 'mapboxgl-marker-container', container);
    }

    getMarkerContainer() {
      return this.markerContainer;
    }
  }

  /**
   * addTo function taken from version 0.33.0
   * https://github.com/mapbox/mapbox-gl-js/blob/adef501c464d51b328bdcdea355008aea9ab8ae1/src/ui/marker.js#L33-L52
   */
  class Marker extends mapbox.Marker {
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

  return Object.assign(mapbox, { Map, Marker });
};


const mapbox = canUseDOM ? monkeyPatchMapbox(require('@appearhere/mapbox-gl/dist/mapbox-gl')) : {};

mapbox.accessToken = 'pk.eyJ1IjoiYXBwZWFyaGVyZSIsImEiOiJvUlJ0MWxNIn0.8_mzlmxdekKy99luyV4T7w';

export default mapbox;
