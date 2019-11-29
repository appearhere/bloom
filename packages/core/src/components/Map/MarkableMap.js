import PropTypes from 'prop-types';
import React, { Component } from 'react';
/* eslint-disable camelcase */
import {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
/* eslint-enable camelcase */
import isEqual from 'lodash/fp/isEqual';
import uniqueId from 'lodash/fp/uniqueId';
import flattenDeep from 'lodash/fp/flattenDeep';
import find from 'lodash/fp/find';
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
  HIGHLIGHTED_MARKER_LAYER,
  CLUSTER_LAYER,
  HIGHLIGHTED_CLUSTER_LAYER,
  MOVE_TO_MARKER_MAX_LAT_OFFSET,
  DEFAULT_MARKER_CONFIG,
} from '../../constants/mapbox';

import css from './MarkableMap.css';

export default class MarkableMap extends Component {
  static propTypes = {
    markers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        lngLat: lngLatType.isRequired,
        label: PropTypes.string.isRequired,
        props: PropTypes.object,
      }),
    ),
    metaMarkers: PropTypes.array,
    colorStops: PropTypes.arrayOf(PropTypes.array),
    intensity: PropTypes.number,
    spread: PropTypes.number,
    cellDensity: PropTypes.number,
    MarkerComponent: PropTypes.func.isRequired,
    GroupMarkerComponent: PropTypes.func.isRequired,
    autoFit: PropTypes.bool,
    highlightedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onMarkerClick: PropTypes.func,
    animateFitBounds: PropTypes.bool,
  };

  static defaultProps = {
    markers: [],
    metaMarkers: [],
    autoFit: false,
    animateFitBounds: true,
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
    const { markers: prevMarkers, metaMarkers: prevMetaMarkers } = prevProps;
    const { activeFeature: prevActiveFeature } = prevState;
    const { markers, autoFit, metaMarkers } = this.props;
    const { activeFeature } = this.state;

    this.updateMapboxMarkerSource();

    if (!isEqual(prevMetaMarkers, metaMarkers)) {
      this.updateMetaMarkerSource(prevMetaMarkers);
    }

    if (!activeFeature || !this.getActiveFeaturedMarker()) {
      this.unmountActiveMarker();
    } else if (!isEqual(activeFeature, prevActiveFeature)) {
      this.renderMarkerPopup(activeFeature);
    }

    if (autoFit) {
      const markersMoved = markers.some(marker => {
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

  getMapboxGL = () => this.map.getMapboxGL();

  getActiveFeaturedMarker = () => {
    const { markers } = this.props;
    const { activeFeature } = this.state;

    if (activeFeature.properties.cluster) {
      return activeFeature;
    }

    if (activeFeature) {
      return find({ id: activeFeature.properties.id }, markers);
    }

    return undefined;
  };

  setCenter = center => {
    this.map.setCenter(center);
  };

  handleMapLoad = () => {
    const mapbox = this.getMapboxGL();

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
      type: DEFAULT_MARKER_CONFIG.type,
      source: MARKER_SOURCE,
      filter: ['all', ['!=', 'active', true], ['!has', 'point_count'], ['!=', 'highlighted', true]],
      layout: {
        'icon-allow-overlap': true,
        'text-allow-overlap': true,
        'icon-image': 'pin-{labellen}',
        'text-field': '{label}',
        'text-font': DEFAULT_MARKER_CONFIG.layout.textFont,
        'text-size': DEFAULT_MARKER_CONFIG.layout.textSize,
        'icon-offset': [0, -15],
        'text-offset': [0, -1.9],
        'text-anchor': 'top',
      },
      paint: DEFAULT_MARKER_CONFIG.paint,
    });

    mapbox.addLayer({
      id: HIGHLIGHTED_MARKER_LAYER,
      type: DEFAULT_MARKER_CONFIG.type,
      source: MARKER_SOURCE,
      filter: ['all', ['!=', 'active', true], ['!has', 'point_count'], ['==', 'highlighted', true]],
      layout: {
        'icon-allow-overlap': true,
        'text-allow-overlap': true,
        'icon-image': 'pin-{labellen}-highlight',
        'text-field': '{label}',
        'text-font': DEFAULT_MARKER_CONFIG.layout.textFont,
        'text-size': DEFAULT_MARKER_CONFIG.layout.textSize,
        'icon-offset': [0, -15],
        'text-offset': [0, -1.9],
        'text-anchor': 'top',
      },
      paint: DEFAULT_MARKER_CONFIG.paint,
    });

    mapbox.addLayer({
      id: CLUSTER_LAYER,
      type: DEFAULT_MARKER_CONFIG.type,
      source: MARKER_SOURCE,
      filter: ['all', ['has', 'point_count'], ['!=', 'highlighted', true]],
      layout: {
        'icon-image': 'pin-cluster',
        'text-field': '{point_count}',
        'text-font': DEFAULT_MARKER_CONFIG.layout.textFont,
        'text-size': DEFAULT_MARKER_CONFIG.layout.textSize,
      },
      paint: DEFAULT_MARKER_CONFIG.paint,
    });

    mapbox.addLayer({
      id: HIGHLIGHTED_CLUSTER_LAYER,
      type: DEFAULT_MARKER_CONFIG.type,
      source: MARKER_SOURCE,
      filter: ['all', ['has', 'point_count'], ['==', 'highlighted', true]],
      layout: {
        'icon-image': 'pin-cluster-highlight',
        'text-field': '{point_count}',
        'text-font': DEFAULT_MARKER_CONFIG.layout.textFont,
        'text-size': DEFAULT_MARKER_CONFIG.layout.textSize,
      },
      paint: DEFAULT_MARKER_CONFIG.paint,
    });

    // When hovering on a marker change the cursor to a pointer
    mapbox.on('mousemove', e => {
      const features = mapbox.queryRenderedFeatures(e.point, {
        layers: [MARKER_LAYER, CLUSTER_LAYER],
      });
      mapbox.getCanvas().style.cursor = features.length ? 'pointer' : '';
    });

    this.updateMapboxMarkerSource();
    this.updateMetaMarkerSource();
  };

  updateMapboxMarkerSource = () => {
    if (!this.mapboxMarkerSource) return;
    const { activeFeature } = this.state;
    const { markers, highlightedId } = this.props;

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
        highlighted: marker.id === highlightedId,
      },
    }));

    this.mapboxMarkerSource.setData({
      type: 'FeatureCollection',
      features,
    });
  };

  updateMetaMarkerSource = prevMetaMarkers => {
    const { metaMarkers } = this.props;
    const mapbox = this.getMapboxGL();

    if (prevMetaMarkers) {
      prevMetaMarkers.forEach(prevMetaMarker => {
        const prevMetaMarkerSource = mapbox.getSource(prevMetaMarker.id);
        const prevMetaMarkerLayer = mapbox.getLayer(prevMetaMarker.id);

        if (prevMetaMarkerSource && prevMetaMarkerLayer && !metaMarkers.includes(prevMetaMarker)) {
          mapbox.removeSource(prevMetaMarker.id);
          mapbox.removeLayer(prevMetaMarker.id);
        }
      });
    }

    metaMarkers.forEach((metaMarker, index) => {
      const metaMarkerSource = mapbox.getSource(metaMarker.id);
      const metaMarkerLayer = mapbox.getLayer(metaMarker.id);

      if (!metaMarkerSource && !metaMarkerLayer) {
        mapbox.addSource(metaMarker.id, {
          type: 'geojson',
          data: metaMarker,
        });
        mapbox.addLayer({
          id: metaMarker.id,
          type: DEFAULT_MARKER_CONFIG.type,
          source: metaMarker.id,
          layout: {
            'icon-image': `meta-${index + 1}`,
            'text-field': metaMarker.label,
            'text-font': DEFAULT_MARKER_CONFIG.layout.textFont,
            'text-size': DEFAULT_MARKER_CONFIG.layout.textSize,
          },
          paint: DEFAULT_MARKER_CONFIG.paint,
        });
      }
    });
  };

  handleMapClick = e => {
    const { originalEvent, point } = e;
    if (originalEvent.target !== this.getMapboxGL().getCanvas()) return;

    const markers = this.getMapboxGL().queryRenderedFeatures(point, { layers: [MARKER_LAYER] });
    const clusters = this.getMapboxGL().queryRenderedFeatures(point, { layers: [CLUSTER_LAYER] });

    if (markers.length > 0) {
      this.handleMarkerClick(markers[0]);
    } else if (clusters.length > 0) {
      this.handleClusterClick(clusters[0]);
    } else {
      this.setState({ activeFeature: null });
    }
  };

  handleMarkerClick = marker => {
    if (this.props.onMarkerClick) {
      this.props.onMarkerClick(marker);
    }
    this.setState({ activeFeature: marker });
  };

  handleClusterClick = cluster => {
    const map = this.map;

    const unbreakableCluster = cluster => {
      this.setState({ activeFeature: cluster });
    };

    this.getMapboxGL().getSource(MARKER_SOURCE).getClusterExpansionZoom(cluster.id, function (err, zoom) {
      if (err)
        return;

      if (zoom >= CLUSTER_MAX_ZOOM) {
        unbreakableCluster(cluster);
      }

      map.easeTo({
        center: cluster.geometry.coordinates,
        zoom: zoom
      });
    });
  };

  fitMarkers = markers => {
    if (!markers.length) return;

    this.map.fitBounds(minLngLatBounds(markers.map(marker => marker.lngLat)), {
      padding: { top: 20, bottom: 20, left: 50, right: 50 },
      offset: [0, 20],
      animate: this.props.animateFitBounds,
    });
  };

  easeTo = lngLat => {
    const [lng, lat] = lngLat;
    const zoom = this.getMapboxGL().getZoom();

    const nextLat = lat + MOVE_TO_MARKER_MAX_LAT_OFFSET * 2 / Math.pow(2, zoom);
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

  markerPopupElement = lngLat => {
    if (!this.activeMarker) {
      this.activeMarker = new mapboxgl.Marker().setLngLat(lngLat).addTo(this.getMapboxGL());
    } else {
      this.activeMarker.setLngLat(lngLat);
    }

    const element = this.activeMarker.getElement();
    element.className = cx(css.marker, css.markerActive);
    return element;
  };

  zoomIn = () => {
    this.map.zoomIn();
  };

  zoomOut = () => {
    this.map.zoomOut();
  };

  renderMarkerPopup = activeFeature => {
    const { MarkerComponent, GroupMarkerComponent, markers } = this.props;
    const lngLat = activeFeature.geometry.coordinates;

    this.easeTo(lngLat);
    const element = this.markerPopupElement(lngLat);

    const getMarkerPropsById = markerId => {
      const marker = markers.find(m => m.id === markerId);

      return marker.props;
    };

    if (activeFeature.properties.cluster) {
      const pointCount = activeFeature.properties.point_count;

      const _self = this;
      this.getMapboxGL().getSource(MARKER_SOURCE).getClusterLeaves(activeFeature.id, pointCount, 0, function(err, activeMarkers) {
        renderSubtreeIntoContainer(
          _self,
          <MarkerContainer
            key={`${_self.id}-activeMarker`}
            MarkerComponent={GroupMarkerComponent}
            props={{ group: activeMarkers.map(activeMarker => getMarkerPropsById(activeMarker.properties.id)) }}
          />,
          element,
        );
      })
    } else {
      renderSubtreeIntoContainer(
        this,
        <MarkerContainer
          key={`${this.id}-activeMarker`}
          MarkerComponent={MarkerComponent}
          props={getMarkerPropsById(activeFeature.properties.id)}
        />,
        element,
      );
    }
  };

  render() {
    const { markers: _markers, MarkerComponent: _MarkerComponent, ...rest } = this.props;
    return (
      <BaseMap
        ref={c => {
          this.map = c;
        }}
        onMapLoad={this.handleMapLoad}
        {...rest}
        onClick={this.handleMapClick}
      />
    );
  }
}
