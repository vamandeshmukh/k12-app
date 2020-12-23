import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './store/store';
import { Provider } from 'react-redux';
import Reducer from './reduxStore/Reducer';

let store = createStore
  (Reducer, { data: 'Initial data' });

  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
