import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setActivePage from '../../actions/navigation';

class Home extends Component {
  static propTypes = {
    setActivePage: PropTypes.func,
  };

  componentWillMount() {
    this.props.setActivePage('Home | Sample Site', 'home');
  }

  render() {
    return (
      <div className="home">
        <h2>It works!</h2>
        <p>
          Welcome to your Single Page App using React, Redux and React Router. You can read more on
          how to build your application with these instructions.
        </p>

        <h2>New Pages</h2>
        <p>
          You can create new pages by adding a new React component in <code>/src/containers</code>{' '}
          and hook them up to a route in <code>/src/router/index.js</code>.
        </p>
        <p>
          Your new page will be automatically wrapped around the page layout (header, navigation,
          footer, etc). This can be updated from <code>/src/containers/Layout/index.js</code>.
        </p>

        <h2>Redux Store</h2>
        <p>
          You are also provided with a sample reducer to set the active page and its title. These
          values live as part of the application store. You can see the store being setup on{' '}
          <code>/src/reducers/navigation.js</code> and the actions to update the store in{' '}
          <code>/src/actions/navigation.js</code>. If you create a new reducer, remember to add it
          to <code>/src/reducers/index.js</code>.
        </p>
        <p>
          To be able to use the actions you need to hook them up to your component using the{' '}
          <code>connect()</code> function from <code>react-redux</code>. You can see an example of
          how to use actions in <code>/src/containers/Home/index.js</code> and{' '}
          <code>/src/containers/About/index.js</code>. You can also see and example of how to use
          store variabales in the Layout file.
        </p>

        <h2>Styling</h2>
        <p>
          Unlike many applications, we feel having CSS within Javascript can be confusing for
          beginners. For this reason, we use a more traditional approach to CSS using SASS.
        </p>
        <p>
          New stylesheets need to be added to <code>/src/scss/main.scss</code> so they get compiled.
        </p>

        <h2>Images</h2>
        <p>
          Similar to CSS, images are handled using a traditional approach. On compilation, webpack
          takes care of copying the <code>/src/static</code> folder to <code>/dist</code>, so you
          can handle all images directly from their path in the static folder. This means if your
          image lives in <code>/static/img/image.jpg</code>, you can use it by doing{' '}
          <code>{`<img src="/static/img/image.jpg" />`}</code>.
        </p>
      </div>
    );
  }
}

export default connect(null, {
  setActivePage,
})(Home);
