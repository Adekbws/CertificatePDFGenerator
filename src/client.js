import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

import { Page, Text, View, Document, StyleSheet } from 'react-pdf';

const store = createStore(rootReducer, { eventsStore: {...window.APP_STATE} }, applyMiddleware(thunk));

ReactDOM.hydrate((
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));
