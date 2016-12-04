// App Endpoint

/* eslint-disable import/default */

import 'babel-polyfill'; // Simplicity in transpiling ES6 gaps. Alternatively import separately (i.e. object.assign)
import React from 'react';
import { render } from 'react-dom'; // react-dom separated from Reac in React.14

import configureStore from './store/configureStore.dev'; // Redux Store Config
import {Provider} from 'react-redux';

// Dependencies for Router Props
import { Router, browserHistory } from 'react-router'; // Router Component handles routing. Use HTML5 Push State to handle browserHistory with clean URLs.
import routes from './routes';

// Actions
import {loadSkills} from './actions/skillActions';
import {loadUsers} from './actions/userActions';

// Style dependencies from App Endpoint
require('./favicon.ico'); // Webpack loads favicon.ico
// import './styles/styles.css'; // Webpack imports Sass/CSS files. Webpack runs associated loader and embeds in page.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); // Instance of Redux Store. Optionally pass initial State to Reducers to override default State defined there
store.dispatch(loadSkills()); // Dispatch Action on initial page load
store.dispatch(loadUsers());

debugger;

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
