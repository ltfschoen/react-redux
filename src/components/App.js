// App Component handles template on all pages
import React, { PropTypes } from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

// Class instead of Stateless component to support hot reloading at top-level
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading} />
        {/* React Router passes Child Components as Props of App Component*/}
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

// Connect to Redux Store to get AJAX loading status and pass it down to Header
export default connect(mapStateToProps)(App);
