// App Component handles template on all pages
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// Class instead of Stateless component to support hot reloading at top-level
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header</p>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
        {/* React Router passes Child Components as Props of App Component*/}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
