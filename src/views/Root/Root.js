import React from 'react';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import HomeView from '../HomeView/HomeView';
import ContactView from '../ContactView/ContactView';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import RegulaminView from '../RegulaminView/RegulaminView';
import OfferView from '../OfferView/OfferView';
import '../../assets/libraries/font-awesome.min.css';
import ScrollTopButton from '../../components/ScrollToTop/ScrollToTop';

const routes = [
  { path: '/', name: 'Home', Component: HomeView },
  { path: '/firma', name: 'Firma', Component: AboutUsPage },
  { path: '/regulamin', name: 'Regulamin', Component: RegulaminView},
  { path: '/oferta', name: 'Oferta', Component: OfferView},
  { path: '/kontakt', name: 'Kontakt', Component: ContactView},
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
        <ScrollTopButton></ScrollTopButton>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default Root;
