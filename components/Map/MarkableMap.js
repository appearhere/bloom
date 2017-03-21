import React, { Component, PropTypes } from 'react';
/* eslint-disable camelcase */
import {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
/* eslint-enable camelcase */
import isEqual from 'lodash/fp/isEqual';
import uniqueId from 'lodash/fp/uniqueId';
import cx from 'classnames';

import minLngLatBounds from '../../utils/geoUtils/minLngLatBounds';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';
import MarkerContainer from './MarkerContainer';
import BaseMap from './BaseMap';

import css from './MarkableMap.css';

export default class MarkableMap extends Component {
  static propTypes = {
    // TODO: shapeOf prop type
    markers: PropTypes.array,
    MarkerComponent: PropTypes.func.isRequired,
    autoFit: PropTypes.bool,
  };

  static defaultProps = {
    markers: [],
    autoFit: false,
  };

  constructor(props) {
    super(props);
    this.id = uniqueId('map_');
  }

  state = {
    activeMarkerId: null,
  };

  componentDidMount() {
    const { autoFit } = this.props;
    this.updateMapboxMarkerSource();
    if (autoFit) this.fitMarkers();
  }

  componentDidUpdate(prevProps) {
    const { markers: prevMarkers } = prevProps;
    const { markers, autoFit } = this.props;
    const { activeMarkerId } = this.state;

    this.updateMapboxMarkerSource();

    if (activeMarkerId !== null) {
      this.renderActiveMarker(activeMarkerId);
    } else {
      this.unmountActiveMarker();
    }

    if (autoFit) {
      const markersMoved = markers.some((marker) => {
        const prevMarker = prevMarkers.find(prev => prev.id === marker.id);
        return !prevMarker || !isEqual(prevMarker.lngLat, marker.lngLat);
      });
      const markerChange = prevMarkers.length !== markers.length || markersMoved;
      if (markerChange) this.fitMarkers();
    }
  }

  componentWillUnmount() {
    this.unmountActiveMarker();
  }

  getMaboxGL = () => this.map.getMaboxGL();

  handleMapLoad = () => {
    const mapbox = this.getMaboxGL();

    mapbox.addSource('markers', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
      cluster: true,
      clusterRadius: 10,
    });
    mapbox.addLayer({
      id: 'markers',
      type: 'symbol',
      source: 'markers',
      filter: ['!=', 'active', true],
      layout: {
        'icon-image': 'pin-{labellen}',
        'text-field': '{label}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'icon-offset': [0, -15],
        'text-offset': [0, -1.9],
        'text-anchor': 'top',
        'text-size': 14,
      },
      paint: {
        'text-color': '#FFFFFF',
      },
    });
    this.mapboxMarkerSource = mapbox.getSource('markers');

    // When hovering on a marker change the cursor to a pointer
    mapbox.on('mousemove', (e) => {
      const features = mapbox.queryRenderedFeatures(e.point, { layers: ['markers'] });
      mapbox.getCanvas().style.cursor = features.length ? 'pointer' : '';
    });

    this.updateMapboxMarkerSource();
  };

  updateMapboxMarkerSource = () => {
    if (!this.mapboxMarkerSource) return;
    const { activeMarkerId } = this.state;
    const { markers } = this.props;

    const features = markers.map(marker => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: marker.lngLat,
      },
      properties: {
        id: marker.id,
        active: activeMarkerId === marker.id,
        label: marker.label,
        labellen: marker.label.length,
      },
    }));

    this.mapboxMarkerSource.setData({ type: 'FeatureCollection', features });
  };

  handleMapClick = (e) => {
    const { originalEvent, point } = e;
    if (originalEvent.target !== this.getMaboxGL().getCanvas()) return;
    const markers = this.getMaboxGL().queryRenderedFeatures(point, { layers: ['markers'] });

    if (markers.length) {
      const marker = markers[0];
      this.moveToMarker(marker);
      this.setState({ activeMarkerId: marker.properties.id });
    } else {
      this.setState({ activeMarkerId: null });
    }
  };

  fitMarkers = () => {
    const { markers } = this.props;
    if (!markers.length) return;

    this.map.fitBounds(
      minLngLatBounds(markers.map(marker => marker.lngLat)),
      { padding: 20, offset: [0, 20], maxZoom: 16 },
    );
  };

  moveToMarker = (marker) => {
    const { geometry } = marker;
    const [markerLng, markerLat] = geometry.coordinates;
    const zoom = this.getMaboxGL().getZoom();

    const nextLat = markerLat + (80 / Math.pow(2, zoom));
    const nextCenter = new mapboxgl.LngLat(markerLng, nextLat).wrap();

    this.map.easeTo({ center: nextCenter });
  };

  unmountActiveMarker = () => {
    const activeMarker = this.activeMarker;
    if (!activeMarker) return;

    unmountComponentAtNode(activeMarker.getElement());
    activeMarker.remove();
    this.activeMarker = null;
  };

  renderActiveMarker = (activeMarkerId) => {
    const { MarkerComponent, markers } = this.props;
    const marker = markers.find(m => m.id === activeMarkerId);

    if (!this.activeMarker) {
      this.activeMarker = new mapboxgl.Marker().setLngLat(marker.lngLat).addTo(this.getMaboxGL());
    } else {
      this.activeMarker.setLngLat(marker.lngLat);
    }

    const element = this.activeMarker.getElement();
    element.className = cx(css.marker, css.markerActive);

    renderSubtreeIntoContainer(
      this,
      <MarkerContainer
        key={ `${this.id}-activeMarker` }
        MarkerComponent={ MarkerComponent }
        props={ marker.props }
      />,
      element
    );
  };

  render() {
    const { markers: _markers, MarkerComponent: _MarkerComponent, ...rest } = this.props;
    return (
      <BaseMap
        ref={ (c) => { this.map = c; } }
        onMapLoad={ this.handleMapLoad }
        { ...rest }
        onClick={ this.handleMapClick }
      />
    );
  }
}