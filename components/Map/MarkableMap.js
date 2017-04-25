import React, { Component, PropTypes } from 'react';
/* eslint-disable camelcase */
import {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
/* eslint-enable camelcase */
import isEqual from 'lodash/fp/isEqual';
import uniqueId from 'lodash/fp/uniqueId';
import flattenDeep from 'lodash/fp/flattenDeep';
import cx from 'classnames';

import lngLatType from '../../utils/propTypeValidations/lngLat';
import minLngLatBounds from '../../utils/geoUtils/minLngLatBounds';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';
import isSingleLevelArray from '../../utils/isSingleLevelArray/isSingleLevelArray';
import nestedArrayDepth from '../../utils/nestedArrayDepth/nestedArrayDepth';
import MarkerContainer from './Markers/MarkerContainer';
import BaseMap from './BaseMap';

import {
  CLUSTER_RADIUS,
  CLUSTER_MAX_ZOOM,
  MARKER_SOURCE,
  MARKER_LAYER,
  CLUSTER_LAYER,
  MOVE_TO_MARKER_MAX_LAT_OFFSET,
} from '../../constants/mapbox';

import css from './MarkableMap.css';

export default class MarkableMap extends Component {
  static propTypes = {
    markers: PropTypes.arrayOf(
      PropTypes.shape({
        id: React.PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
        ]).isRequired,
        lngLat: lngLatType.isRequired,
        label: PropTypes.string.isRequired,
        props: PropTypes.object,
      })
    ),
    MarkerComponent: PropTypes.func.isRequired,
    GroupMarkerComponent: PropTypes.func.isRequired,
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
    activeFeature: null,
  };

  componentDidMount() {
    const { autoFit, markers } = this.props;
    this.updateMapboxMarkerSource();
    if (autoFit) this.fitMarkers(markers);
  }

  componentDidUpdate(prevProps, prevState) {
    const { markers: prevMarkers } = prevProps;
    const { activeFeature: prevActiveFeature } = prevState;
    const { markers, autoFit } = this.props;
    const { activeFeature } = this.state;

    this.updateMapboxMarkerSource();

    if (!activeFeature) {
      this.unmountActiveMarker();
    } else if (!isEqual(activeFeature, prevActiveFeature)) {
      this.renderMarkerPopup(activeFeature);
    }

    if (autoFit) {
      const markersMoved = markers.some((marker) => {
        const prevMarker = prevMarkers.find(prev => prev.id === marker.id);
        return !prevMarker || !isEqual(prevMarker.lngLat, marker.lngLat);
      });
      const markerChange = prevMarkers.length !== markers.length || markersMoved;
      if (markerChange) this.fitMarkers(markers);
    }
  }

  componentWillUnmount() {
    this.unmountActiveMarker();
  }

  getMaboxGL = () => this.map.getMaboxGL();

  handleMapLoad = () => {
    const mapbox = this.getMaboxGL();

    mapbox.addSource(MARKER_SOURCE, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
      cluster: true,
      clusterRadius: CLUSTER_RADIUS,
      clusterMaxZoom: CLUSTER_MAX_ZOOM,
    });
    this.mapboxMarkerSource = mapbox.getSource(MARKER_SOURCE);

    mapbox.addLayer({
      id: MARKER_LAYER,
      type: 'symbol',
      source: MARKER_SOURCE,
      filter: [
        'all',
        ['!=', 'active', true],
        ['!has', 'point_count'],
      ],
      layout: {
        'icon-allow-overlap': true,
        'text-allow-overlap': true,
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

    mapbox.addLayer({
      id: CLUSTER_LAYER,
      type: 'symbol',
      source: MARKER_SOURCE,
      filter: ['has', 'point_count'],
      layout: {
        'icon-image': 'pin-cluster',
        'text-field': '{point_count}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-size': 14,
      },
      paint: {
        'text-color': '#FFFFFF',
      },
    });

    // When hovering on a marker change the cursor to a pointer
    mapbox.on('mousemove', (e) => {
      const features = mapbox.queryRenderedFeatures(e.point, {
        layers: [MARKER_LAYER, CLUSTER_LAYER],
      });
      mapbox.getCanvas().style.cursor = features.length ? 'pointer' : '';
    });

    this.updateMapboxMarkerSource();
  };

  updateMapboxMarkerSource = () => {
    if (!this.mapboxMarkerSource) return;
    const { activeFeature } = this.state;
    const { markers } = this.props;

    const features = markers.map(marker => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: marker.lngLat,
      },
      properties: {
        id: marker.id,
        active: activeFeature && marker.id === activeFeature.properties.id,
        label: marker.label,
        labellen: marker.label.length,
      },
    }));

    this.mapboxMarkerSource.setData({ type: 'FeatureCollection', features });
  };

  handleMapClick = (e) => {
    const { originalEvent, point } = e;
    if (originalEvent.target !== this.getMaboxGL().getCanvas()) return;

    const markers = this.getMaboxGL().queryRenderedFeatures(point, { layers: [MARKER_LAYER] });
    const clusters = this.getMaboxGL().queryRenderedFeatures(point, { layers: [CLUSTER_LAYER] });

    if (markers.length > 0) {
      this.handleMarkerClick(markers[0]);
    } else if (clusters.length > 0) {
      this.handleClusterClick(clusters[0]);
    } else {
      this.setState({ activeFeature: null });
    }
  };

  handleMarkerClick = (marker) => {
    this.setState({ activeFeature: marker });
  };

  handleClusterClick = (cluster) => {
    const { markers } = this.props;
    const clusterSet = JSON.parse(cluster.properties.markerids);

    const unbreakableCluster = () => {
      // all markers are clustered at the same zoom level
      const singleZoomCluster = isSingleLevelArray(clusterSet);
      if (!singleZoomCluster) return false;

      const zoom = this.getMaboxGL().getZoom();
      const clusterZoomLevel = nestedArrayDepth(clusterSet) + Math.ceil(zoom);

      // the cluster cannot uncluster even at max zoom
      return clusterZoomLevel >= CLUSTER_MAX_ZOOM;
    };

    if (unbreakableCluster()) {
      this.setState({ activeFeature: cluster });
    } else {
      const clusterMarkerIds = flattenDeep(clusterSet);
      const clusteredMarkers = markers.filter(marker => clusterMarkerIds.indexOf(marker.id) !== -1);

      this.fitMarkers(clusteredMarkers);
    }
  };

  fitMarkers = (markers) => {
    if (!markers.length) return;

    this.map.fitBounds(
      minLngLatBounds(markers.map(marker => marker.lngLat)),
      { padding: { top: 20, bottom: 20, left: 50, right: 50 }, offset: [0, 20] },
    );
  };

  easeTo = (lngLat) => {
    const [lng, lat] = lngLat;
    const zoom = this.getMaboxGL().getZoom();

    const nextLat = lat + ((MOVE_TO_MARKER_MAX_LAT_OFFSET * 2) / Math.pow(2, zoom));
    const nextCenter = [lng, nextLat];

    this.map.easeTo({ center: nextCenter });
  };

  unmountActiveMarker = () => {
    const activeMarker = this.activeMarker;
    if (!activeMarker) return;

    unmountComponentAtNode(activeMarker.getElement());
    activeMarker.remove();
    this.activeMarker = null;
  };

  markerPopupElement = (lngLat) => {
    if (!this.activeMarker) {
      this.activeMarker = new mapboxgl.Marker().setLngLat(lngLat).addTo(this.getMaboxGL());
    } else {
      this.activeMarker.setLngLat(lngLat);
    }

    const element = this.activeMarker.getElement();
    element.className = cx(css.marker, css.markerActive);
    return element;
  };

  renderMarkerPopup = (activeFeature) => {
    const { MarkerComponent, GroupMarkerComponent, markers } = this.props;
    const lngLat = activeFeature.geometry.coordinates;

    this.easeTo(lngLat);
    const element = this.markerPopupElement(lngLat);

    if (activeFeature.properties.cluster) {
      const clusterSet = JSON.parse(activeFeature.properties.markerids);
      const clusterMarkerIds = flattenDeep(clusterSet);
      const clusteredMarkers = markers.filter(marker => clusterMarkerIds.indexOf(marker.id) !== -1);

      renderSubtreeIntoContainer(
        this,
        <MarkerContainer
          key={ `${this.id}-activeMarker` }
          MarkerComponent={ GroupMarkerComponent }
          props={ { group: clusteredMarkers.map(marker => marker.props) } }
        />,
        element
      );
    } else {
      const marker = markers.find(m => m.id === activeFeature.properties.id);

      renderSubtreeIntoContainer(
        this,
        <MarkerContainer
          key={ `${this.id}-activeMarker` }
          MarkerComponent={ MarkerComponent }
          props={ marker.props }
        />,
        element
      );
    }
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