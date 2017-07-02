import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Layout extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.navigation.title !== this.props.navigation.title) {
      document.title = nextProps.navigation.title;
    }
  }

  render() {
    const activePage = this.props.navigation.page;
    return (
      <div id="app-wrapper" className="layout">
        <div id="header" className="layout__header">
          <div className="page-wrapper">
            <h1 className="logo">
              <img src="/static/img/logo.svg" width="36" height="36" />
              <Link to="/">Tiny React SPA</Link>
            </h1>
            <nav id="menu">
              <ul>
                <li>
                  <Link to="/" className={activePage === 'home' ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={activePage === 'about' ? 'active' : ''}>About</Link>
                </li>
              </ul>
            </nav>
            <nav id="right-menu">
              <ul>
                <li>
                  <a href="https://github.com/mmellado/tiny-react-spa" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mmellado/tiny-react-spa/releases" target="_blank" rel="noopener noreferrer">v0.0.0</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div id="content" className="layout__content">
          <div className="page-wrapper">
            {this.props.children}
          </div>
        </div>
        <div id="footer" className="layout__footer">
          <div className="page-wrapper">
            <span>
              Created with ❤ by <a
                href="https://github.com/mmellado/"
                rel="noopener noreferrer"
                target="_blank"
              >
                @mmellado
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
  };
}

// Passing the pure parameter as false as this component is wrapping a wrapper. This is likely not
// needed for other uses of connect(). More about connect:
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
export default connect(mapStateToProps, null, null, { pure: false })(Layout);