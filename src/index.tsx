import * as React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './components/App/App';
import store from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
