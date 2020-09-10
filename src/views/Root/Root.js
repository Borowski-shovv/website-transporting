import React from 'react';
import './Root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import HomeView from '../HomeView/HomeView';
import ContactView from '../ContactView/ContactView';
import Footer from '../../components/Footer/Footer';
import RegulaminView from '../RegulaminView/RegulaminView';
import OfferView from '../OfferView/OfferView';
import GalleryView from '../GalleryView/GalleryView';
import '../../assets/libraries/font-awesome.min.css';
import '../../assets/themify-icons/themify-icons.css';
// scroll top
import ScrollTopButton from '../../components/ScrollToTop/ScrollToTop';
import ScrollToTop from 'react-router-scroll-top'
import CookieConsent from "react-cookie-consent";
import PricesView from '../PricesView/PricesView';

const routes = [
  { path: '/', name: 'Home', Component: HomeView },
  { path: '/oferta', name: 'Oferta', Component: OfferView},
  { path: '/firma', name: 'Firma', Component: AboutUsPage },
  { path: '/regulamin', name: 'Regulamin', Component: RegulaminView},
  { path: '/kontakt', name: 'Kontakt', Component: ContactView},
  { path: '/galeria', name: 'Galeria', Component: GalleryView},
  { path: '/cennik', name: 'Cennik', Component: PricesView},
];


function Root() {
  return (
    <>
      <Router>
        <ScrollToTop>       
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
            acceptOnScrollPercentage={50} contentStyle={{flex: "0 auto", margin: "0px", padding: "0px 15px"}}  buttonText="ZGODA" style={{alignItems: "center", justifyContent:"center", background: "#24292e", fontSize: '12px'}}  buttonStyle={{margin: '5px', display: 'flex', background: "#bf1e2e", color: "white", fontSize: "13px" }}>
            
              Ta strona korzysta z plików cookie, aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, zgodę na ich użycie.
            
          </CookieConsent>
          </ScrollToTop> 
      </Router>

    </>
  );
}

export default Root;
