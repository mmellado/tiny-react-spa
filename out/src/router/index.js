import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import About from '../containers/About';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Layout>
      </BrowserRouter>
    )
  }
}