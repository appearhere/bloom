import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import uniqueId from 'lodash/fp/uniqueId';
import actionWithComplexArgs from '../../.storybook/utils/actionWithComplexArgs';
import MarkableMap from './MarkableMap';
import BaseMap from './BaseMap';
import Marker from './Markers/Marker';
import GroupMarker from './Markers/SpaceGroupMarker';
import SpaceListingCard from '../Cards/SpaceListingCard/SpaceListingCard';

import testGeoJson from './testGeoJson';

const SMALL_TEST_GEO_JSON = 'small';
const LARGE_TEST_GEO_JSON = 'large';

const SpaceMarker = props => <Marker><SpaceListingCard { ...props } /></Marker>;

const prices = ['£1', '£33', '£420', '£1,000', '£20,000', '£999,999', '1 €', '20 €', '440 €',
  '4.040 €', '40.040 €', '120.040 €'];


const generateMarkers = (number = 1, lng, lat) => {
  const markers = [];

  for (let i = 0; i < number; i += 1) {
    const markerLng = lng || (-0.09 + ((Math.random() - Math.random()) * Math.random()));
    const markerLat = lat || (51.505 + ((Math.random() - Math.random()) * Math.random()));

    const price = prices[Math.floor(Math.random() * prices.length)];
    const id = uniqueId();

    markers.push({
      id,
      lngLat: [markerLng, markerLat],
      label: price,
      props: {
        price,
        id,
        priceUnit: '/day',
        location: 'Shoreditch',
        city: 'London',
        size: '1000 sqft',
        name: 'Bold Street Shop',
        images: [{
          src: 'https://source.unsplash.com/random/500x503',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x500',
          alt: 'hello2',
        }, {
          src: 'https://source.unsplash.com/random/500x502',
          alt: 'hello',
        }, {
          src: 'https://source.unsplash.com/random/500x501',
          alt: 'hello2',
        }],
        href: '#',
      },
    });
  }
  return markers;
};

class TestMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [-1.5253180650545346, 52.879078603224315],
      zoom: 11,
      markers: generateMarkers(10),
      heatmapGeoJsonKey: SMALL_TEST_GEO_JSON,
    };
  }

  toggleMarkers = () => {
    this.setState({
      markers: generateMarkers(Math.floor(Math.random() * 20)),
    });
  };

  handleMoveEnd = (mapboxUserAction, view) => {
    const { center, zoom } = view;
    this.setState({
      center,
      zoom,
    });
  };

  updateGeoJson = () => {
    const { heatmapGeoJsonKey } = this.state;

    if (heatmapGeoJsonKey === SMALL_TEST_GEO_JSON) {
      this.setState({
        heatmapGeoJsonKey: LARGE_TEST_GEO_JSON,
      });
    } else {
      this.setState({
        heatmapGeoJsonKey: SMALL_TEST_GEO_JSON,
      });
    }
  };

  render() {
    const { markers, heatmapGeoJsonKey, center, zoom } = this.state;
    return (
      <div style={ { height: '93vh' } }>
        <button onClick={ this.toggleMarkers }>Randomise</button>
        <button onClick={ this.updateGeoJson }>Update heatmap</button>
        <MarkableMap
          markers={ markers }
          heatmapGeoJson={ testGeoJson[heatmapGeoJsonKey] }
          MarkerComponent={ SpaceMarker }
          GroupMarkerComponent={ GroupMarker }
          center={ center }
          zoom={ zoom }
          onClick={ actionWithComplexArgs('map clicked') }
          onMoveEnd={ this.handleMoveEnd }
          autoFit
        />
      </div>
    );
  }
}

storiesOf('Map', module)
  .add('Default', () => (
    <div style={ { height: '96vh' } }>
      <BaseMap
        onClick={ actionWithComplexArgs('map clicked') }
        onMoveEnd={ actionWithComplexArgs('map moved') }
      />
    </div>
  ))
  .add('MarkableMap', () => (
    <TestMap />
  ))
  .add('Grouped Space Marker', () => (
    <div style={ { height: '96vh' } }>
      <MarkableMap
        markers={ generateMarkers(7, -0.09, 51.505) }
        MarkerComponent={ SpaceMarker }
        GroupMarkerComponent={ GroupMarker }
        onClick={ actionWithComplexArgs('map clicked') }
        onMoveEnd={ actionWithComplexArgs('map moved') }
        autoFit
      />
    </div>
  ));
