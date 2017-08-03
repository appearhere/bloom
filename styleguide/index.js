import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Styleguide from './Styleguide';
import './index.css';

ReactDOM.render(
  // App Container is required to make hot reloading works. It just returns
  // it's children in production, so no biggy
  <AppContainer>
    <Styleguide />
  </AppContainer>,
  document.getElementById('root')
);

// As of React Hot Loader 3, we've got to add this in to make sure components
// reload properly. Not so nice, but it works 👍
if (module.hot) {
  module.hot.accept('./Styleguide', () => {
    /* eslint-disable global-require */
    const NextApp = require('./Styleguide').default;
    /* eslint-enable global-require */

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      document.getElementById('root')
    );
  });
}
