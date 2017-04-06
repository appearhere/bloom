import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import mapStyle from '!!file!./mapStyle.json';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';
import lngLat from '../../utils/propTypeValidations/lngLat';
import noop from '../../utils/noop';

import { DEFAULT_CENTER, DEFAULT_MAX_ZOOM, DEFAULT_ZOOM } from '../../constants/mapbox';

import css from './BaseMap.css';

export default class BaseMap extends Component {
  static propTypes = {
    allowWrap: PropTypes.bool,
    center: lngLat,
    className: PropTypes.string,
    dragRotate: PropTypes.bool,
    mapClassName: PropTypes.string,
    mapboxStyle: React.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    maxZoom: PropTypes.number,
    onClick: PropTypes.func,
    onMapLoad: PropTypes.func,
    onMoveEnd: PropTypes.func,
    zoom: PropTypes.number,
  };

  static defaultProps = {
    allowWrap: true,
    center: DEFAULT_CENTER,
    dragRotate: false,
    mapboxStyle: mapStyle,
    maxZoom: DEFAULT_MAX_ZOOM,
    onClick: noop,
    onMapLoad: noop,
    onMoveEnd: noop,
    zoom: DEFAULT_ZOOM,
  };

  componentDidMount() {
    const {
      allowWrap,
      center,
      dragRotate,
      mapboxStyle,
      maxZoom,
      onClick,
      onMapLoad,
      zoom,
    } = this.props;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      renderWorldCopies: allowWrap,
      style: mapboxStyle,
      center,
      dragRotate,
      maxZoom,
      zoom,
    });

    this.map.on('click', onClick);
    this.map.on('moveend', this.handleMoveEnd);
    this.map.on('load', (event) => { onMapLoad(event.target); });
  }

  componentWillReceiveProps(nextProps) {
    const { center, zoom } = this.props;
    const { center: nextCenter, zoom: nextZoom } = nextProps;

    if (center[0] !== nextCenter[0] || center[1] !== nextCenter[1]) this.map.setCenter(nextCenter);
    if (zoom !== nextZoom) this.map.setZoom(nextZoom);
  }

  componentWillUnmount() {
    const { onClick } = this.props;

    this.map.off('click', onClick);
    this.map.off('moveend', this.handleMoveEnd);
    this.map.remove();
  }

  getMaboxGL() {
    return this.map;
  }

  easeTo(options) {
    this.map.easeTo(options, { user: false });
  }

  fitBounds(bounds, options) {
    this.map.fitBounds(bounds, options, { user: false });
  }

  handleMoveEnd = (data) => {
    const { onMoveEnd } = this.props;
    const { user, ...rest } = data;

    const userAction = user !== false;
    onMoveEnd(
      userAction,
      {
        bounds: this.map.getBounds().toArray(),
        center: this.map.getCenter().toArray(),
        zoom: this.map.getZoom(),
      },
      rest,
    );
  };

  mapboxgl = {};

  render() {
    const { className, mapClassName } = this.props;

    return (
      <div className={ cx(css.root, className) }>
        <div ref={ (c) => { this.mapContainer = c; } } className={ cx(css.map, mapClassName) } />
      </div>
    );
  }
}