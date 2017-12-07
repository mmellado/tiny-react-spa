import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../components/Home';
import About from '../components/About';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}
