import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import uniqueId from 'lodash/fp/uniqueId';

import {
  Map,
  SpaceListingCard,
  Badge,
} from '@appearhere/bloom';

import { metaMarkersA, metaMarkersB, metaMarkersC } from './testMetaMarkers';

const stories = storiesOf('Map', module);
stories.addDecorator(withKnobs);

const SpaceMarker = props => (
  <Map.BaseMarker>
    <SpaceListingCard {...props} />
  </Map.BaseMarker>
);

const prices = [
  '£1',
  '£33',
  '£420',
  '£1,000',
  '£20,000',
  '£999,999',
  '1 €',
  '20 €',
  '440 €',
  '4.040 €',
  '40.040 €',
  '120.040 €',
];

const generateMarkers = (number = 1, lng, lat) => {
  const markers = [];

  for (let i = 0; i < number; i += 1) {
    const markerLng = lng || -0.09 + (Math.random() - Math.random()) * Math.random();
    const markerLat = lat || 51.505 + (Math.random() - Math.random()) * Math.random();

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
        images: [
          {
            src: 'https://source.unsplash.com/random/500x503',
            alt: 'hello',
          },
          {
            src: 'https://source.unsplash.com/random/500x500',
            alt: 'hello2',
          },
          {
            src: 'https://source.unsplash.com/random/500x502',
            alt: 'hello',
          },
          {
            src: 'https://source.unsplash.com/random/500x501',
            alt: 'hello2',
          },
        ],
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
      highlightedId: null,
    };
  }

  highlightMarker = (id) => {
    this.setState({
      highlightedId: id,
    });
  };

  resetHighlight = () => {
    this.setState({
      highlightedId: null,
    });
  };

  toggleMarkers = () => {
    this.setState({
      markers: generateMarkers(Math.floor(Math.random() * 20)),
    });
  };

  render() {
    const { markers } = this.state;
    const { metaMarkers } = this.props;

    return (
      <div style={{ height: '93vh' }}>
        <button onClick={this.toggleMarkers}>Randomise</button>
        <div style={{display: 'flex', flexDirection: 'row', margin: '1rem 0'}}>
          {markers.map(marker => (
            <Badge
              hollow
              key={marker.id}
              onMouseEnter={this.highlightMarker.bind(this, marker.id)}
              onMouseLeave={this.resetHighlight}
            >
              Space {marker.id}
            </Badge>
          ))}
        </div>
        <Map.MarkableMap
          markers={markers}
          metaMarkers={metaMarkers}
          MarkerComponent={SpaceMarker}
          highlightedId={this.state.highlightedId}
          GroupMarkerComponent={Map.GroupMarker}
          autoFit
        />
      </div>
    );
  }
}

stories
  .add('MarkableMap', () => <TestMap />)
  .add('MarkableMap w/Meta markers', () => {
    const metaMarkers = [
      boolean('Meta Markers A', true) && metaMarkersA,
      boolean('Meta Markers B', true) && metaMarkersB,
      boolean('Meta Markers C', true) && metaMarkersC,
    ].filter(metaMarker => metaMarker);

    return <TestMap metaMarkers={metaMarkers} />;
  })
  .add('Grouped Space Marker', () => (
    <div style={{ height: '96vh' }}>
      <Map.MarkableMap
        markers={generateMarkers(7, -0.09, 51.505)}
        MarkerComponent={SpaceMarker}
        GroupMarkerComponent={Map.GroupMarker}
        autoFit
      />
    </div>
  ));
