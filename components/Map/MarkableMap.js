import React, { Component, PropTypes } from 'react';
/* eslint-disable camelcase */
import {
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
/* eslint-enable camelcase */
import isEqual from 'lodash/fp/isEqual';
import uniqueId from 'lodash/fp/uniqueId';
import differenceBy from 'lodash/fp/differenceBy';
import cx from 'classnames';

import minLngLatBounds from '../../utils/minLngLatBounds/minLngLatBounds';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';
import InteractiveMarker from './InteractiveMarker';
import BaseMap from './BaseMap';

import css from './MarkableMap.css';

export default class MarkableMap extends Component {
  static propTypes = {
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
  }

  componentDidMount() {
    const { markers, autoFit } = this.props;
    markers.forEach(this.renderMarker);
    if (autoFit) this.fitMarkers();
  }

  componentDidUpdate(prevProps) {
    const { markers: prevMarkers } = prevProps;
    const { markers, autoFit } = this.props;

    const removedMarkers = differenceBy('id')(prevMarkers)(markers);
    removedMarkers.forEach(this.removeMarker);
    markers.forEach(this.renderMarker);

    const markersMoved = markers.some((marker) => {
      const prevMarker = prevMarkers.find(prev => prev.id === marker.id);
      return !prevMarker || !isEqual(prevMarker.lngLat, marker.lngLat);
    });
    const markerChange = removedMarkers.length || markersMoved;

    if (autoFit && markerChange) this.fitMarkers();
  }

  componentWillUnmount() {
    Object.keys(this.mapboxMarkers).forEach((id) => {
      this.removeMarker({ id });
    });
  }

  getMaboxGL = () => this.map.getMaboxGL();

  handleMarkerClick = (e, id) => {
    const marker = this.mapboxMarkers[id];
    const markerLngLat = marker.getLngLat();
    const zoom = this.getMaboxGL().getZoom();

    const nextLat = markerLngLat.lat + (80 / Math.pow(2, zoom));
    const nextCenter = new mapboxgl.LngLat(markerLngLat.lng, nextLat).wrap();

    this.map.easeTo({ center: nextCenter });
    this.setState({ activeMarkerId: id });
  }

  handleMapClick = ({ originalEvent }) => {
    if (originalEvent.target !== this.getMaboxGL().getCanvas()) return;
    this.setState({ activeMarkerId: null });
  }

  mapboxMarkers = {};

  removeMarker = ({ id }) => {
    const marker = this.mapboxMarkers[id];
    unmountComponentAtNode(marker.getElement());
    marker.remove();
    delete this.mapboxMarkers[id];
    if (this.state.activeMarkerId === id) this.setState({ activeMarkerId: null });
  }

  fitMarkers = () => {
    const markers = Object.keys(this.mapboxMarkers).map(id => this.mapboxMarkers[id]);
    if (!markers.length) return;

    const destucturedMarkers = markers.map(marker => marker.getLngLat().toArray());

    this.map.fitBounds(
      minLngLatBounds(destucturedMarkers),
      { padding: 20, offset: [0, 20], maxZoom: 16 },
    );
  }

  renderMarker = ({ lngLat, props, id }) => {
    const { activeMarkerId } = this.state;
    const { MarkerComponent } = this.props;

    let marker;
    if (this.mapboxMarkers[id]) {
      marker = this.mapboxMarkers[id];
      marker.setLngLat(lngLat);
    } else {
      marker = new mapboxgl.Marker().setLngLat(lngLat).addTo(this.getMaboxGL());
      this.mapboxMarkers[id] = marker;
    }

    const active = activeMarkerId === id;
    const element = marker.getElement();
    element.className = cx(css.marker, active ? css.markerActive : null);

    renderSubtreeIntoContainer(
      this,
      <InteractiveMarker
        active={ active }
        id={ id }
        key={ `${this.id}-${id}-marker` }
        MarkerComponent={ MarkerComponent }
        onClick={ this.handleMarkerClick }
        props={ props }
      />,
      element
    );

    return marker;
  }

  render() {
    const { markers: _markers, MarkerComponent: _MarkerComponent, ...rest } = this.props;
    return <BaseMap ref={ (c) => { this.map = c; } } { ...rest } onClick={ this.handleMapClick } />;
  }
}