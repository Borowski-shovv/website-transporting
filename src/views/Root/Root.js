import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from '../../context/userContext';
import './Root.css';
import Axios from 'axios';
import Header from '../../components/Navbar';


// pages
// import AboutUsPage from '../AboutUsPage/AboutUsPage';
// import HomeView from '../HomeView/HomeView';
// import ContactView from '../ContactView/ContactView';
// import RegulaminView from '../RegulaminView/RegulaminView';
// import OfferView from '../OfferView/OfferView';
// import GalleryView from '../GalleryView/GalleryView';
// import PricesView from '../PricesView/PricesView';
// import CheckoutView from '../CheckoutView/checkout';
import OrderView from '../OrderView/OrderView';
import Login from '../../auth/Login';
import Register from '../../auth/Register';

//common components 
import Footer from '../../components/Footer/Footer';

import '../../assets/libraries/font-awesome.min.css';
import '../../assets/themify-icons/themify-icons.css';
// scroll top
import ScrollTopButton from '../../components/ScrollToTop/ScrollToTop';
import ScrollToTop from 'react-router-scroll-top'
// cookies
import CookieConsent from "react-cookie-consent";


const routes = [
  // { path: '/', name: 'Home', Component: HomeView },
  // { path: '/oferta', name: 'Oferta', Component: OfferView},
  // { path: '/firma', name: 'Firma', Component: AboutUsPage },
  // { path: '/regulamin', name: 'Regulamin', Component: RegulaminView},
  // { path: '/kontakt', name: 'Kontakt', Component: ContactView},
  // { path: '/galeria', name: 'Galeria', Component: GalleryView},
  // { path: '/cennik', name: 'Cennik', Component: PricesView},
  { path: '/wycena', name: 'Cennik', Component: OrderView},
  // { path: '/koszyk', name: 'Koszyk', Component: CheckoutView},
 { path: '/logowanie', name: 'Logowanie', Component: Login},
 { path: '/rejestracja', name: 'Rejestracja', Component: Register}
];

function Root() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      //1. sprawdzenie w local storage czy istnieje klucz tokena i czy nie jest pusty 
      let token = localStorage.getItem('user-token');
      let userId = localStorage.getItem('user-id');

      if (token === null) {
        localStorage.setItem('user-token', '');
        token = '';
      }

      if(userId === null) {
        localStorage.setItem('user-id', '');
        userId = '';
      }

      //2. wyslanie tokena do servera
      // zapytanie zwraca true/false
      const tokenData = {"user_id": userId, "token": token}
      const tokenResponse = await Axios.post('https://najtanszapaczkaszwecja.pl/api/user/validate_token', tokenData, {
        headers: { 
          'Content-Type': 'application/json'
        },
        auth: {
          username: 'shovv', 
          password: '$HOVV2020'
        },
      });
       console.log(tokenResponse.data);


      if(tokenResponse.data.valid) {
        setUserData({
          token: token,
        })
      }

      //3 jezeli zwrócona jest prawda z tokenem
      // zapytaj o informacje dotyczace uzytkownika zwiazanego z tym tokenem
      // if (tokenResponse.data) {
      //   const userRes = await Axios.get('/users', { 
      //       headers: { 'x-auth-token': token },
      //       auth: { username: 'shovv', password: '$HOVV2020'}
      //   });
        
      //   setUserData({
      //     token,
      //     user: userRes.data,
      //   });  
      // }
    };

    checkLoggedIn();
  }, []);

  return (
       <Router>
        <ScrollToTop>     
        <UserContext.Provider value={{ userData, setUserData }}>  
        <Header />
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
        {/* <Footer /> */}
          <CookieConsent acceptOnScroll={true}
            acceptOnScrollPercentage={50} contentStyle={{flex: "0 auto", margin: "0px", padding: "0px 15px", textAlign: "center"}}  buttonText="ZGODA" style={{alignItems: "center", justifyContent:"center", background: "#24292e", fontSize: '12px'}}  buttonStyle={{margin: '5px', display: 'flex', background: "#bf1e2e", color: "white", fontSize: "13px" }}>
              Ta strona korzysta z plików cookie, aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, zgodę na ich użycie.
          </CookieConsent>
          </UserContext.Provider>
          </ScrollToTop> 
      </Router>

  );
}

export default Root;
