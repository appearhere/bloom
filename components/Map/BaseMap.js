import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

import mapboxgl from '../../utils/mapboxgl/mapboxgl';
import lngLat from '../../utils/propTypeValidations/lngLat';
import noop from '../../utils/noop';

import { LONDON } from '../../constants/coordinates';

import css from './BaseMap.css';

export default class BaseMap extends Component {
  static propTypes = {
    allowWrap: PropTypes.bool,
    center: lngLat,
    className: PropTypes.string,
    mapboxStyle: PropTypes.string,
    mapClassName: PropTypes.string,
    zoom: PropTypes.number,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    allowWrap: false,
    center: LONDON,
    mapboxStyle: 'mapbox://styles/mapbox/streets-v9?optimize=true',
    zoom: 11,
    onClick: noop,
  };

  componentDidMount() {
    const { allowWrap, center, mapboxStyle, zoom, onClick } = this.props;

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: mapboxStyle,
      renderWorldCopies: allowWrap,
      center,
      zoom,
    });

    this.map.on('click', onClick);
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
    this.map.remove();
  }

  getMaboxGL() {
    return this.map;
  }

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