import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import LinkedCard from './LinkedCard';
import SpaceCard from './SpaceCard';

describe('Card', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Card image="">
        <span />
      </Card>,
      div
    );
  });
});

describe('LinkedCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <LinkedCard href="" image="">
        <span />
      </LinkedCard>,
      div
    );
  });
});

describe('SpaceCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SpaceCard
        name="foo"
        image="bar"
        price="foobar"
        location="barfoo"
        href="#"
      />,
      div
    );
  });
});