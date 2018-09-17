import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './helpers/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable react/jsx-filename-extension,no-undef */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
