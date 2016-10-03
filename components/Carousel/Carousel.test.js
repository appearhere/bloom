import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'react-addons-test-utils';

import Carousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carousel />, div);
});

it('calculates the width of slides correctly ', () => {
  const items = [<div key="lmao" />, <div key="lol" />];
  const shallowRenderer = createRenderer();
  let result = null;

  shallowRenderer.render(
    <Carousel
      items={items}
      itemsPerColumn={1}
    />
  );

  result = shallowRenderer.getRenderOutput();
  expect(result.props.children.props.slideWidth).toBe(100);

  shallowRenderer.render(
    <Carousel
      items={items}
      itemsPerColumn={2}
    />
  );

  result = shallowRenderer.getRenderOutput();
  expect(result.props.children.props.slideWidth).toBe(50);

  shallowRenderer.render(
    <Carousel
      items={items}
      itemsPerColumn={3}
    />
  );

  result = shallowRenderer.getRenderOutput();
  expect(result.props.children.props.slideWidth).toBe(50);
});