import React from 'react';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Container } from 'react-bootstrap'
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import HomeView from '../HomeView/HomeView';
import ContactView from '../ContactView/ContactView';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import RegulaminView from '../RegulaminView/RegulaminView';
import OfferView from '../OfferView/OfferView';
import GalleryView from '../GalleryView/GalleryView';
import '../../assets/libraries/font-awesome.min.css';
import '../../assets/themify-icons/themify-icons.css';
import ScrollTopButton from '../../components/ScrollToTop/ScrollToTop';
import CookieConsent from "react-cookie-consent";
import PricesView from '../PricesView/PricesView';

const routes = [
  { path: '/', name: 'Home', Component: HomeView },
  { path: '/firma', name: 'Firma', Component: AboutUsPage },
  { path: '/oferta', name: 'Oferta', Component: OfferView},
  { path: '/regulamin', name: 'Regulamin', Component: RegulaminView},
  { path: '/kontakt', name: 'Kontakt', Component: ContactView},
  { path: '/galeria', name: 'Galeria', Component: GalleryView},
  { path: '/cennik', name: 'Cennik', Component: PricesView},
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
        <Footer />
          <CookieConsent acceptOnScroll={true}
  acceptOnScrollPercentage={50} contentStyle={{flex: " 0 auto", margin: "15px 0"}}  buttonText="ZGODA" style={{justifyContent:"center", background: "#24292e"}}  buttonStyle={{ background: "#bf1e2e", color: "white", fontSize: "13px" }}>
            <Container >
              Ta strona korzysta z plików cookie, aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, zgodę na ich użycie.
            </Container>
          </CookieConsent>
      </Router>

    </>
  );
}

export default Root;
