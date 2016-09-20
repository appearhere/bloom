import React from 'react';
import ReactDOM from 'react-dom';
import { isElement } from 'react-addons-test-utils';

import iconHelper from './iconHelper';

describe('Icon helper', () => {
  it('outputs a valid react component', () => {
    const Icon = iconHelper();
    expect(isElement(<Icon />)).toBe(true);
  });
});

describe('Icon component', () => {
  it('renders without crashing when given a valid icon name', () => {
    const svg = <svg />;
    const iconName = 'icon';
    const icons = { [iconName]: svg };
    const Icon = iconHelper(icons);

    const div = document.createElement('div');
    ReactDOM.render(<Icon name={ iconName } />, div);
  });

  it('throws when given an invalid icon name', () => {
    const svg = <svg />;
    const incorrectIconName = 'troll';
    const icons = { icon: svg };
    const Icon = iconHelper(icons);
    const elm = React.createElement(Icon, { name: incorrectIconName });
    const div = document.createElement('div');
    let hasThrown = false;

    try {
      ReactDOM.render(elm, div);
    } catch (e) {
      hasThrown = true;
    }

    expect(hasThrown).toBeTruthy();
  });

  it('throws when given no icon name', () => {
    const svg = <svg />;
    const icons = { icon: svg };
    const Icon = iconHelper(icons);
    const elm = React.createElement(Icon);
    const div = document.createElement('div');
    let hasThrown = false;

    try {
      ReactDOM.render(elm, div);
    } catch (e) {
      hasThrown = true;
    }

    expect(hasThrown).toBeTruthy();
  });
});