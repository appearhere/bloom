import React from 'react';
import { render } from 'react-dom';

import DeviceFrame from './DeviceFrame';
import Macbook from './Macbook';
import IPhone from './IPhone';


const images = [{
  src: '',
  alt: '',
}, {
  src: '',
  alt: '',
}];

const css = {
  root: '',
  frame: '',
  inner: '',
  img: '',
};

describe('Device frame', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <DeviceFrame deviceImage="" css={css}>
        { images }
      </DeviceFrame>,
      div
    );
  });
});

describe('Macbook device frame', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <Macbook>
        { images }
      </Macbook>,
      div
    );
  });
});

describe('IPhone device frame', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
      <IPhone>
        { images }
      </IPhone>,
      div
    );
  });
});
