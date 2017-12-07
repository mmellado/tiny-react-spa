import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setActivePage from '../../actions/navigation';

export class About extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('About | Sample Site', 'about');
  }

  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p>This is a sample About page.</p>
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(About);
