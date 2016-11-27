// App Component handles template on all pages
import React, { PropTypes } from 'react';
import Header from './common/Header';

// Class instead of Stateless component to support hot reloading at top-level
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
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
