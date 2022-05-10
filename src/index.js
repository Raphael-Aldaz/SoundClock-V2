import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';

import './index.scss';
import App from '../src/Component/App/App';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
      <App />
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);

