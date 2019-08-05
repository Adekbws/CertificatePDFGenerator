import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import initialState from './initial'
import Html from './components/Html';
import App from './components/App';

var ImageRouter = require('./api/upload/image');

var http = require('http');
var https = require('https');
const app = express();

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({extended: true})); // to support URL-encoded bodies
app.use('/', express.static(__dirname+"/public"));

app.use(express.static(path.join(__dirname)));

app.use('/api', ImageRouter);

app.get('*', async (req, res) => {
  const scripts = ['vendor.js', 'client.js'];
  const context = {};
  const store = createStore(rootReducer, { eventsStore:initialState }, applyMiddleware(thunk));
  const appMarkup = ReactDOMServer.renderToString((
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
    ));
  const html = ReactDOMServer.renderToStaticMarkup(<Html children={appMarkup} scripts={scripts} initialState={initialState} />);

  res.send(`<!doctype html>${html}`);
});


app.listen = function() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

app.listen(3000);

