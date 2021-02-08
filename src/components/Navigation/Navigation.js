import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../../assets/images/solidfach.svg';
import Hamburger from './Hamburger';
import { connect } from 'react-redux';

import plflag from '../../assets/images/pl.png';
import seflag from '../../assets/images/se.png';

import orderbox from '../../assets/images/parcel-white.svg';


const Navigation = ({paczka}) => {
  
  return (
    <>
      <header className="top-area" id="home">
        <div className="top-area-bg" data-stellar-background-ratio="0.6"></div>
        <div className="header-top-area">
          <div className="mainmenu-area" id="mainmenu-area">
            <div className="mainmenu-area-bg"></div>
            <nav className="navbar fixed-top">
              <div className="info-bar">
              <div className="container">
                <div className="info-bar-wrapper">
                  <a href="tel:+48735130862" className="info-bar-number">
                  <img src={plflag} alt=""/><i className="fa fa-phone"></i><span>+48 735 130 862</span>
                  </a>
                  <a  href="tel:+48764012966" className="info-bar-number">
                    <img src={seflag} alt=""/><i className="fa fa-phone"></i><span>+48 764 012 966</span>
                  </a>
                  <a  href="mailto:biuro@transport-szwecja.com" className="info-bar-number">
                    <i className="fa fa-mail-forward"></i><span>biuro@transport-szwecja.com</span>
                  </a>
                </div>
                </div>
              </div> 
              <div className="container">
                <div className="navbar-header">
                  <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <Hamburger />
                <Link to="/koszyk"className="order">
                  <img src={orderbox} alt=""/>
                  <span>{paczka.length}</span> 
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <Link className="scroll-down-btn" to="/">
          <span></span>
        </Link>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Navigation);
