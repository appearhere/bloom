import React from 'react';
import { render } from 'react-dom';

import {
  Field,
  Meta,
  Description,
  Label,
  Value,
} from './FormComponents';

describe('Field', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Field />, div);
  });
});

describe('Meta', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Meta />, div);
  });
});

describe('Description', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Description />, div);
  });
});

describe('Label', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Label />, div);
  });
});

describe('Value', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Value />, div);
  });
});