import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import uniqueId from 'lodash/fp/uniqueId';

import actionWithComplexArgs from '../../.storybook/utils/actionWithComplexArgs';
import MarkableMap from './MarkableMap';
import BaseMap from './BaseMap';
import Marker from './Markers/Marker';
import GroupMarker from './Markers/SpaceGroupMarker';
import SpaceListingCard from '../Cards/SpaceListingCard/SpaceListingCard';

import { metaMarkersA, metaMarkersB, metaMarkersC } from './testMetaMarkers';

const stories = storiesOf('Map', module);
stories.addDecorator(withKnobs);

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
  static propTypes = {
    metaMarkers: PropTypes.array,
  };

  static defaultProps = {
    metaMarkers: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      markers: generateMarkers(10),
    };
  }

  toggleMarkers = () => {
    this.setState({
      markers: generateMarkers(Math.floor(Math.random() * 20)),
    });
  };

  render() {
    const { markers } = this.state;
    const { metaMarkers } = this.props;

    return (
      <div style={ { height: '93vh' } }>
        <button onClick={ this.toggleMarkers }>Randomise</button>
        <MarkableMap
          markers={ markers }
          metaMarkers={ metaMarkers }
          MarkerComponent={ SpaceMarker }
          GroupMarkerComponent={ GroupMarker }
          onClick={ actionWithComplexArgs('map clicked') }
          autoFit
        />
      </div>
    );
  }
}

stories
  .add('Default', () => (
    <div style={ { height: '96vh' } }>
      <BaseMap
        onClick={ actionWithComplexArgs('map clicked') }
        onMoveEnd={ actionWithComplexArgs('map moved') }
      />
    </div>
  ))
  .add('MarkableMap', () => <TestMap />)
  .add('MarkableMap w/Meta markers', () => {
    const metaMarkers = [
      (boolean('Meta Markers A', true) && metaMarkersA),
      (boolean('Meta Markers B', true) && metaMarkersB),
      (boolean('Meta Markers C', true) && metaMarkersC),
    ].filter(metaMarker => metaMarker);

    return <TestMap metaMarkers={ metaMarkers } />;
  })
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
