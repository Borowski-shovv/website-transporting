import React from 'react';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyView from '../CompanyView/CompanyView';
import HomeView from '../HomeView/HomeView';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

const routes = [
  { path: '/', name: 'Home', Component: HomeView },
  { path: '/firma', name: 'Firma', Component: CompanyView },
];

function Root() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key="name" path={path} exact>
              <div className="page">
                <Component />
              </div>
            </Route>
          ))}
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default Root;
