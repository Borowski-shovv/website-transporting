import React from 'react';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyView from '../CompanyView/CompanyView';
import ContactView from '../ContactView/ContactView';
import HomeView from '../HomeView/HomeView';
import Navigation from '../../components/Navigation/Navigation';
// import Layout from '../../components/Layout';

function Root() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/firma" component={CompanyView} />
          <Route path="/kontakt" component={ContactView} />
        </Switch>
      </Router>
    </>
  );
}

export default Root;
