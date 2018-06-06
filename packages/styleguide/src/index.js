import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import '@appearhere/bloom/dist/bloom.css';

import Styleguide from './Styleguide';

import './index.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Styleguide />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render once
render(Styleguide);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Styleguide', () => {
    render(Styleguide);
  });
}
