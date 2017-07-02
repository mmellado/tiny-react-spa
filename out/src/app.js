import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';

import store from './store/store.js';
import Router from './router';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'))