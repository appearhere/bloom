import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import actionWithComplexArgs from '../../.storybook/utils/actionWithComplexArgs';
import MarkableMap from './MarkableMap';
import BaseMap from './BaseMap';
import Marker from './SpaceMarker';

const prices = ['£1', '£33', '£420', '£1,000', '£20,000', '£999,999', '1 €', '20 €', '440 €',
  '4.040 €', '40.040 €', '120.040 €'];


const generateMarkers = (number = 1) => {
  const markers = [];

  for (let i = 0; i < number; i += 1) {
    const lng = -0.09 + ((Math.random() - Math.random()) * Math.random());
    const lat = 51.505 + ((Math.random() - Math.random()) * Math.random());

    const price = prices[Math.floor(Math.random() * prices.length)];

    markers.push({
      id: i,
      lngLat: [lng, lat],
      label: price,
      props: {
        price,
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
      markers: generateMarkers(10),
    };
  }

  toggleMarkers = () => {
    this.setState({ markers: generateMarkers(Math.floor(Math.random() * 20)) });
  }

  render() {
    const { markers } = this.state;
    return (
      <div style={ { height: '93vh' } }>
        <button onClick={ this.toggleMarkers }>Randomise</button>
        <MarkableMap
          markers={ markers }
          MarkerComponent={ Marker }
          onClick={ actionWithComplexArgs('map clicked') }
          onMoveEnd={ actionWithComplexArgs('map moved') }
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
  ));