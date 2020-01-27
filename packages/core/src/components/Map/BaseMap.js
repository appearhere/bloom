//@flow

import React, { Component } from 'react';
import cx from 'classnames';

import mapStyle from './mapStyle.json';
import mapboxgl from '../../utils/mapboxgl/mapboxgl';
import lngLat from '../../utils/propTypeValidations/lngLat';
import noop from '../../utils/noop';

import { DEFAULT_CENTER, DEFAULT_MAX_ZOOM, DEFAULT_ZOOM } from '../../constants/mapbox';

import css from './BaseMap.css';
const tile = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QD+RXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAMAAAExAAIAAAAmAAAAcgEyAAIAAAAUAAAAmIdpAAQAAAABAAAArAAAAAAAAD2tAAACLQAAPa0AAAItQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKQAyMDE3OjAzOjA5IDE0OjQ0OjA4AAAEkAQAAgAAABQAAADioAEAAwAAAAEAAQAAoAIABAAAAAEAAAA9oAMABAAAAAEAAAA9AAAAADIwMTc6MDM6MDkgMTQ6NDQ6MDgA/+ENyGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE3LTAzLTA5VDE0OjQ0OjA4WiIgeG1wOkNyZWF0ZURhdGU9IjIwMTctMDMtMDlUMTQ6NDQ6MDhaIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNy0wMy0wOVQxNDo0NDowOFoiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDljYjk0N2EtNmE2NS00YWNjLWJhNjgtMDI2YzU2ODYzYjQxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzMjk2ZjNhLWEzYWMtNDk0NC04YTM5LWEyZTllNjE3ZGRmYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjNjYzQwMmU0LTQ1NjUtMTE3YS1hZGE4LTk1MjQzMWE1ODhmZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIiBzdEV2dDp3aGVuPSIyMDE3LTAzLTA5VDE0OjQ0OjA4WiIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowOWNiOTQ3YS02YTY1LTRhY2MtYmE2OC0wMjZjNTY4NjNiNDEiIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIvPiA8cmRmOmxpIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iIHN0RXZ0OndoZW49IjIwMTctMDMtMDlUMTQ6NDQ6MDhaIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzMjk2ZjNhLWEzYWMtNDk0NC04YTM5LWEyZTllNjE3ZGRmYiIgc3RFdnQ6YWN0aW9uPSJzYXZlZCIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QBkUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACwcAVoAAxslRxwCAAACAAIcAj4ACDIwMTcwMzA5HAI/AAsxNDQ0MDgrMDAwMDhCSU0EJQAAAAAAEJPggClXNCG/+GzRc9d/qcP/wgARCAA9AD0DAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAwIEAQUABgcICQoL/8QAwxAAAQMDAgQDBAYEBwYECAZzAQIAAxEEEiEFMRMiEAZBUTIUYXEjB4EgkUIVoVIzsSRiMBbBctFDkjSCCOFTQCVjFzXwk3OiUESyg/EmVDZklHTCYNKEoxhw4idFN2WzVXWklcOF8tNGdoDjR1ZmtAkKGRooKSo4OTpISUpXWFlaZ2hpand4eXqGh4iJipCWl5iZmqClpqeoqaqwtba3uLm6wMTFxsfIycrQ1NXW19jZ2uDk5ebn6Onq8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAABAgADBAUGBwgJCgv/xADDEQACAgEDAwMCAwUCBQIEBIcBAAIRAxASIQQgMUETBTAiMlEUQAYzI2FCFXFSNIFQJJGhQ7EWB2I1U/DRJWDBROFy8ReCYzZwJkVUkiei0ggJChgZGigpKjc4OTpGR0hJSlVWV1hZWmRlZmdoaWpzdHV2d3h5eoCDhIWGh4iJipCTlJWWl5iZmqCjpKWmp6ipqrCys7S1tre4ubrAwsPExcbHyMnK0NPU1dbX2Nna4OLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/bAEMBBwcHDQwNGBAQGBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/aAAwDAQACEQMRAAAB9LpdatWrVq1IpdatWrVq1IpdatWrVq1IpdatWrVq1IpdatWrVq1IpdatWrVq1IpdatWrVq1NqmtWrVq1av/aAAgBAQABBQJPs/fT7P30+z99Ps/fT7P30+z99Ps/fCzTMvMvMvMvMvMvMv8A/9oACAEDEQE/Af8AewP/2gAIAQIRAT8B/wB7A//aAAgBAQAGPwL/AJED/8QAMxABAAMAAgICAgIDAQEAAAILAREAITFBUWFxgZGhscHw0RDh8SAwQFBgcICQoLDA0OD/2gAIAQEAAT8h4v8A8ji//I4v/wAji/8AyOL/API4v/yOL/8AIIOL6y+svrL6y+svrL6y/wD/2gAMAwEAAhEDEQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAABJJJP/EADMRAQEBAAMAAQIFBQEBAAEBCQEAESExEEFRYSBx8JGBobHRweHxMEBQYHCAkKCwwNDg/9oACAEDEQE/EP8A9gP/2gAIAQIRAT8Q/wD2A//aAAgBAQABPxD+b/L/APkfzf5f/wAj+b/L/wDkfzf5f/yP5v8AL/8Akfzf5f8A8j+b/L/+QNBDfPl93/If93/If93/ACH/AHf8h/3f8h/3f8h/3f8AIf8Ad//Z';

type Props = {
  allowWrap:boolean,
  center: lngLat,
  className: string,
  dragRotate:boolean,
  mapClassName: string,
  mapboxStyle: string | Object,
  maxZoom: number,
  onClick: Function,
  onMapLoad: Function,
  onMoveStart: Function,
  onMoveEnd: Function,
  zoom: number,
}

export default class BaseMap extends Component<Props> {
  map: any;
  mapContainer: any;

  static defaultProps = {
    allowWrap: true,
    center: DEFAULT_CENTER,
    dragRotate: false,
    mapboxStyle: mapStyle,
    maxZoom: DEFAULT_MAX_ZOOM,
    onClick: noop,
    onMapLoad: noop,
    onMoveStart: noop,
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
    this.map.on('movestart', this.handleMoveStart);
    this.map.on('moveend', this.handleMoveEnd);
    this.map.on('load', event => {
      onMapLoad(event.target);
    });
  }

  componentWillUnmount() {
    const { onClick } = this.props;

    this.map.off('click', onClick);
    this.map.off('movestart', this.handleMoveStart);
    this.map.off('moveend', this.handleMoveEnd);
    this.map.remove();
  }

  getMapboxGL() {
    return this.map;
  }

  setCenter = (center: lngLat) => {
    this.map.setCenter(center, { user: false });
  };

  easeTo(options: Object) {
    this.map.easeTo(options, { user: false });
  }

  fitBounds(bounds: lngLat, options: Object) {
    this.map.fitBounds(bounds, options, { user: false });
  }

  handleMoveEnd = (data: Object) => {
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

  handleMoveStart = (e: Event) => {
    const { onMoveStart } = this.props;

    onMoveStart(e);
  };

  zoomIn = () => {
    this.map.zoomIn();
  };

  zoomOut = () => {
    this.map.zoomOut();
  };

  mapboxgl = {};

  render() {
    const { className, mapClassName } = this.props;

    return (
      <div
        className={cx(css.root, className)}
        style={{
          backgroundImage: `url(${tile})`,
        }}
      >
        <div
          ref={c => {
            this.mapContainer = c;
          }}
          className={cx(css.map, mapClassName)}
        />
      </div>
    );
  }
}
