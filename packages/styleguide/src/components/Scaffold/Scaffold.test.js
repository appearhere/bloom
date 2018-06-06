import React from 'react';
import { render } from 'react-dom';

import { H, T, D, C, A, Dl, Placeholder } from './Scaffold';

describe('Scaffold components', () => {
  describe('H', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<H />, div);
    });
  });

  describe('T', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<T />, div);
    });
  });

  describe('D', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<D />, div);
    });
  });

  describe('C', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<C />, div);
    });
  });

  describe('A', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<A />, div);
    });
  });

  describe('Dl', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<Dl />, div);
    });
  });

  describe('Placeholder', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      render(<Placeholder>Foo</Placeholder>, div);
    });
  });
});
