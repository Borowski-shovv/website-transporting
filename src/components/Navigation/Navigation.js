import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Logo from '../../assets/images/solidfach.svg';
import Hamburger from './Hamburger';
import plflag from '../../assets/images/pl.png';
import seflag from '../../assets/images/se.png';

const Navigation = () => {
  return (
    <>
        <div className="info-bar">
          <div>
          <img src={plflag} alt=""/><i className="fa fa-phone"></i><span>+48 735 130 862</span>
          </div>
          <div>
            <img src={seflag} alt=""/><i className="fa fa-phone"></i><span>+48 764 012 966</span>
          </div>
        </div> 
      <header className="top-area" id="home">
        <div className="top-area-bg" data-stellar-background-ratio="0.6"></div>
        <div className="header-top-area">
          <div className="mainmenu-area" id="mainmenu-area">
            <div className="mainmenu-area-bg"></div>
            <nav className="navbar">
              <div className="container">
                <div className="navbar-header">
                  <a href="#home" className="navbar-brand">
                    <img src={Logo} alt="logo" />
                  </a>
                </div>
                <Hamburger />
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

export default Navigation;
