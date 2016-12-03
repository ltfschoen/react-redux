import React from 'react';

// IndexRoute exposes root path at '/'
import { Route, IndexRoute } from 'react-router';

// Always load App Component composed by passing nested Child Component based on routing
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage.js';
import SkillsPage from './components/skill/SkillsPage.js';
import ManageSkillPage from './components/skill/ManageSkillPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="skills" component={SkillsPage} />
    <Route path="skill" component={ManageSkillPage} />
    <Route path="skill/:id" component={ManageSkillPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
