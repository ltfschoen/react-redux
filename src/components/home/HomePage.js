import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Welcome</h1>

      <h2>Introduction</h2>
      <Link to="about" className="btn btn-primary btn-lg">Reac Redux App</Link>
    </div>
  );
};

export default HomePage;
